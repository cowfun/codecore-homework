class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_comment, only: [:destroy]
  before_action :find_post, only: [:create]
  before_action :authorize_user!, except: [:create]

  def create
    @comment = @post.comments.build(comment_params)
    @comment.user = current_user
    @comment.save
    redirect_to post_path(@post)
  end

  def destroy
    @comment.destroy
    redirect_to post_path(@comment.post)
  end

  private

  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:description)
  end

  def authorize_user!
    # binding.pry
    unless can?(:manage, @comment)
      redirect_to post_path(@comment.post), alert: 'Access Denied!'
    end
  end
end
