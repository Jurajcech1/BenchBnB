require("byebug")
class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
      render :show
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end
end
