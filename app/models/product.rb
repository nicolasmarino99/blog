# frozen_string_literal: true

class Product
  include Mongoid::Document
  field :name, type: String
  field :type, type: String
  field :length, type: Integer
  field :width, type: Integer
  field :height, type: Integer
  field :weight, type: Integer

  validates_presence_of :name, :type, :length, :width, :height, :weight
end
