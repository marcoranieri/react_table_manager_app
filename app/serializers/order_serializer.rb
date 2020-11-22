class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :table_id, :dish_id, :priority, :child, :created_at

  belongs_to :table
  belongs_to :dish
end
