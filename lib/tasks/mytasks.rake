# frozen_string_literal: true

namespace :mongodb do
  desc 'This is a Hello world task. All it does it say hello'
  product_seed = JSON.parse(File.read('db/products.json'))
  task seed: :environment do
    product_seed['products'].map { |product| Product.new(
      name: product['name'],
      type: product['type'],
      length: product['length'],
      width: product['width'],
      height: product['height'],
      weight: product['weight']
      )
    }
  end
end
