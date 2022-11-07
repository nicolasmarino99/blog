# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  def index
    if !querystring?
      @products = Product.all.entries
      render json: @products
    else
      @product = Product.find_by(
        length: product_params[:length],
        width: product_params[:width],
        height: product_params[:height]
      )
      if @product.save
        render json: @product
      else
        render json: { failures: @product.errors }
      end
    end
  end

  private

  def querystring?
    %i[length width height].all? { |s| params.key? s }
  end

  def product_params
    params.permit(:length, :width, :height)
  end
end
