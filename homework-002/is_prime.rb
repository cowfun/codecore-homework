# ****************************************************************************
#
# Is Prime
#
# ****************************************************************************

def is_prime(val)
  n = val - 1
  while n != 0
    if n == 1
      return true
    elsif val % n == 0
      return false
    elsif val < 1
      return "error"
    else
      n -= 1
    end
  end
end
