module ApplicationHelper

	def background
		if Time.zone.now.hour >= 19 && Time.zone.now.hour <= 5
			'night'
		else
			'day'
		end
	end

end
