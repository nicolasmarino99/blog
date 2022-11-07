# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all.entries
    render json: @products
  end

  def show
    @product = Product.find_by(id: product_params[:id])
    if @product.save
      render json: @product
    else
      render json: { failures: @product.errors }
    end
  end

  def product_params
    params.permit(:id)
  end
end
