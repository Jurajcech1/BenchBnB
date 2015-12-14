class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    bounded_benches = Bench.where(:lat => bounds["southWest"]["lat"]..bounds["northEast"]["lat"])
          .where(:lng => bounds["southWest"]["lng"]..bounds["northEast"]["lng"])
    return bounded_benches
  end

end
