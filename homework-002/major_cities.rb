# ****************************************************************************
#
# Major Cities
#
# ****************************************************************************

major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

def cities(obj)
  obj.each do |x, y|
    puts "#{x} has #{y.length} cities: #{y.join(", ")}"
  end
end

# ****************************************************************************
#
# Stretch
#
# ****************************************************************************

major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

def cities(obj)
  obj.each do |x, y|
    if y.length > 1
      last = y.pop()
      puts "#{x} has #{y.length + 1} cities: #{y.join(", ")} and #{last}"
      y = y.push(last)
    else
      puts "#{x} has #{y.length} city: #{y}"
    end
  end
end
