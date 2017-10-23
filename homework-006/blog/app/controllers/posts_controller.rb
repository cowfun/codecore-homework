class PostsController < ApplicationController

  before_action :find_post, only: [:show, :edit, :update, :destroy]

  def index
    @featured = Post.last
    @posts = Post.order(created_at: :desc)
    @recent = Post.order(created_at: :desc).limit(10)
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def update
    @post.update post_params
    redirect_to @post
  end

  def create
    @post = Post.new post_params
    @post.save
    redirect_to root_path
  end

  def show
    last = Post.last
    @isLast = false
    if @post.id == last.id
      @isLast = true
    end

    @comments = @post.comments.all
    @comment = Comment.new
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    @post = Post.find params[:id]
  end
end
