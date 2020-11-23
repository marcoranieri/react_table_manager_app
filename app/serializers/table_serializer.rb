class TableSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :table_number, :pax, :total_amount_cents, :active

  has_many :dishes, through: :orders
end
