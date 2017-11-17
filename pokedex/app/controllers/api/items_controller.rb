class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render :index
  end

  def show
    @items = Item.find(params[:id])
    render :show
  end
end
