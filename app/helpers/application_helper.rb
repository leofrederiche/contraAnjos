module ApplicationHelper

	def background
		if Time.zone.now.hour >= 5 && Time.zone.now.hour <= 19
			'day'
		else
			'night'
		end
	end

end
