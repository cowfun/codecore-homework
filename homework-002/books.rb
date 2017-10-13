# ****************************************************************************
#
# Book
#
# ****************************************************************************

class Book
  def initialize
    @title = ''
    @chapters = []
  end

  attr_accessor :title, :chapters

  def add_chapter(input)
    @chapters << input
  end

  def chapters
    counter = 1
    puts "Your book, #{@title} has #{@chapters.length} chapters"
    @chapters.each do |chapter|
      puts "#{counter}. #{chapter}"
      counter += 1
    end
  end
end
