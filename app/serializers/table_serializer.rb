class TableSerializer
  include FastJsonapi::ObjectSerializer
  attributes :table_number, :pax, :total_amount_cents, :active

  has_many :dishes, through: :orders
end
