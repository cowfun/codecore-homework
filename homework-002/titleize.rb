# ****************************************************************************
#
# Titleize
#
# ****************************************************************************

module HelperMethods
  def titleize(name)

    arr = name.split(" ")
    newArr = []
    exception = ['in', 'the', 'of', 'and', 'or', 'from']

    arr.each do |x|
      if exception.include?(x)
        newArr << x
      else
        newArr << x.capitalize
      end
    end
    newArr.join(" ")
  end
end

class Class1
  extend HelperMethods
end

class Class2
  include HelperMethods
end

# Uses Extends
# Extends means that it is a class method, allowing it to be run off the class
Class1.titleize("lord of the rings")

# Uses Includes
# Includes means that it is a instance method, meaning an object must be made
# prior to running the method.
c = Class2.new
c.titleize("lord of the rings")







































# ****************************************************************************
#
# End of Page
#
# ****************************************************************************
