class PostsController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_post, only: [:show, :edit, :update, :destroy]
  before_action :authorize_user!, except: [:new, :create, :index, :show]

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
    @post.user = current_user
    @post.save
    redirect_to root_path
  end

  def show
    last = Post.last
    @isLast = false
    if @post.id == last.id
      @isLast = true
    end

    @comments = @post.comments.order(created_at: :desc)
    @comment = Comment.new
  end

  def destroy
    @post.destroy
    redirect_to root_path, notice: 'Post successfully deleted'
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    @post = Post.find params[:id]
  end

  def authorize_user!
    # binding.pry
    unless can?(:manage, @post)
      flash[:alert] = "Access Denied!"
      redirect_to root_path
    end
  end
end
