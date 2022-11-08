# frozen_string_literal: true

class Api::V1::ProductsController < ApplicationController
  def index
    if !querystring?
      @products = Product.all.entries
      render json: @products
    else
      @product =
        Product
        .where(:weight.gte => product_params[:weight])
        .and(:length.gte => product_params[:length])
        .and(:height.gte => product_params[:height])
        .and(:width.gte => product_params[:width])
        .to_a
        .first
      if @product.save
        render json: @product
      else
        render json: { failures: @product.errors }
      end
    end
  end

  def show
    if @product
      render json: @product
    else
      render json: @product.errors
    end
  end

  def create
    @product = Product.new(@product_params)

    if @product.save
      render json: @product
    else
      render json: @product.errors
    end
  end

  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy

    render json: { notice: 'p@product was successfully removed.' }
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def querystring?
    %i[length width height weight].all? { |s| params.key? s }
  end

  def product_params
    params.permit(:length, :width, :height, :weight, :id)
  end
end
