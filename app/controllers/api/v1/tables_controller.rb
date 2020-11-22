module Api
  module V1
    class TablesController < ApiController

      # before_action :authenticate, only: %i[create update destroy]
      skip_before_action :authenticate_user!

      # GET /api/v1/tables
      def index
        tables = Table.all

        render json: TableSerializer.new(tables, options).serialized_json
        # render json: serializer(tables, options)
      end

      # GET /api/v1/tables/:id
      def show
        table = Table.find_by(id: params[:id])

        render json: TableSerializer.new(table, options).serialized_json
        # render json: serializer(table, options)
      end

      # POST /api/v1/tables
      def create
        table = Table.new(table_params)

        if table.save
          render json: serializer(table)
        else
          render json: errors(table), status: 422
        end
      end

      # PATCH /api/v1/tables/:id
      def update
        table = Table.find_by(id: params[:id])

        if table.update(table_params)
          render json: serializer(table, options)
        else
          render json: errors(table), status: 422
        end
      end

      # DELETE /api/v1/tables/:id
      def destroy
        if table.destroy
          head :no_content
        else
          render json: errors(table), status: 422
        end
      end

      private

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[dishes orders] }
      end

      # Get all tables
      def tables
        @tables ||= Table.all
      end

      # Get a specific table
      def table
        @table ||= Table.find_by(id: params[:id])
      end

      # Strong params
      def table_params
        params.require(:table).permit(:table_number, :pax, :total_amount_cents, :active)
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