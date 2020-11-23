module Api
  module V1
    class DishesController < ApiController

      # before_action :authenticate, only: %i[create update destroy]
      skip_before_action :authenticate_user!

      # GET /api/v1/dishes
      def index

        render json: DishSerializer.new(dishes, options).serialized_json
        # render json: serializer(tables, options)
      end

      # # GET /api/v1/tables/:id
      # def show
      #   table = Table.find_by(id: params[:id])

      #   render json: TableSerializer.new(table, options).serialized_json
      #   # render json: serializer(table, options)
      # end

      # # POST /api/v1/tables
      # def create
      #   table = Table.new(table_params)

      #   if table.save
      #     render json: serializer(table)
      #   else
      #     render json: errors(table), status: 422
      #   end
      # end

      # # PATCH /api/v1/tables/:id
      # def update
      #   table = Table.find_by(id: params[:id])

      #   if table.update(table_params)
      #     render json: serializer(table, options)
      #   else
      #     render json: errors(table), status: 422
      #   end
      # end

      # # DELETE /api/v1/tables/:id
      # def destroy
      #   if table.destroy
      #     head :no_content
      #   else
      #     render json: errors(table), status: 422
      #   end
      # end

      private

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[] }
      end

      # Get all dishes
      def dishes
        @dishes   ||= Dish.all
        # @antipasti = Dish.tagged_with("antipasto")
        # @primi     = Dish.tagged_with("primo")
        # @secondi   = Dish.tagged_with("secondo")
        # @contorni  = Dish.tagged_with("contorno")
        # @dolci     = Dish.tagged_with("dolce")
        # @bevande   = Dish.tagged_with("bevande")


        # @dishes = [
        #   @antipasti,
        #   @primi,
        #   @secondi,
        #   @contorni,
        #   @dolci,
        #   @bevande
        # ].flatten
      end

      # Strong params
      def dish_params
        params.require(:dish).permit(:name, :color, :price_cents)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        TableSerializer
          .new(records, options)
          .serialized_json
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end