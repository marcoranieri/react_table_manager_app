class DishSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :color, :price_cents

  has_many :orders
end
