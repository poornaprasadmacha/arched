"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users2, 
  Heart, 
  MessageSquare, 
  Plus, 
  Send 
} from "lucide-react";
import { INITIAL_COMMUNITY_POSTS, CommunityPostItem } from "@/lib/data/initial-data";
import AllServicesSidebar from "@/components/AllServicesSidebar";

export default function SocialInterfacePage() {
  const [posts, setPosts] = useState<CommunityPostItem[]>(INITIAL_COMMUNITY_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    category: "Academic Studio",
    authorName: "",
    authorInstitution: "",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  });

  const handleToggleLike = (postId: string) => {
    const isCurrentlyLiked = !!likedPosts[postId];
    setLikedPosts(prev => ({ ...prev, [postId]: !isCurrentlyLiked }));
    setPosts(prev =>
      prev.map(p =>
        p.id === postId
          ? { ...p, likesCount: p.likesCount + (isCurrentlyLiked ? -1 : 1) }
          : p
      )
    );
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [
              ...p.comments,
              { author: "Student Peer Reviewer", text, timeAgo: "Just now" },
            ],
          };
        }
        return p;
      })
    );

    setCommentInputs(prev => ({ ...prev, [postId]: "" }));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.description) return;

    const created: CommunityPostItem = {
      id: `post-${Date.now()}`,
      authorName: newPost.authorName || "Registered Scholar",
      authorInstitution: newPost.authorInstitution || "School of Architecture",
      title: newPost.title,
      description: newPost.description,
      category: newPost.category,
      imageUrl: newPost.imageUrl,
      likesCount: 1,
      commentsCount: 0,
      createdAt: new Date().toISOString(),
      comments: [],
    };

    setPosts([created, ...posts]);
    setShowCreateModal(false);
    setNewPost({
      title: "",
      description: "",
      category: "Academic Studio",
      authorName: "",
      authorInstitution: "",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Peer Stage &bull; Student Architectural Community</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Social Interface
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-3xl">
            A digital architectural social stage engineered for design students to present digital portfolios, exchange rigorous critiques, and coordinate study groups.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Social Feed */}
          <div className="flex-1 space-y-8 w-full">
            {/* Feed Controls Bar */}
            <div className="bg-[#f8f9fa] border border-[#e0e4e8] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#7f8c8d]">
                Displaying Curated Visual Portfolios &bull; High Resolution
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Project Showcase</span>
              </button>
            </div>

            {/* Create Project Modal */}
            {showCreateModal && (
              <div className="bg-white border border-[#2c3e50] p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#e0e4e8]">
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    Publish Architectural Portfolio Entry
                  </h3>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="text-xs text-[#7f8c8d] hover:text-[#1a1a1a] cursor-pointer"
                  >
                    Cancel [ESC]
                  </button>
                </div>

                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        placeholder="e.g. Kinetic Facade Pavilion"
                        className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                        Category Taxonomy *
                      </label>
                      <select
                        value={newPost.category}
                        onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                        className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none"
                      >
                        <option value="Academic Studio">Academic Studio</option>
                        <option value="Competition Entry">Competition Entry</option>
                        <option value="Parametric Prototype">Parametric Prototype</option>
                        <option value="Thesis Research">Thesis Research</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPost.authorName}
                        onChange={(e) => setNewPost({ ...newPost, authorName: e.target.value })}
                        placeholder="e.g. Ar. Ananya Sharma"
                        className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                        Architecture School *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPost.authorInstitution}
                        onChange={(e) => setNewPost({ ...newPost, authorInstitution: e.target.value })}
                        placeholder="e.g. CEPT University"
                        className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                      Architectural Tectonic Description *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newPost.description}
                      onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                      placeholder="Detail your spatial concept, materiality, ventilation strategy, and structural grid..."
                      className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#7f8c8d] block">
                      High-Resolution Image URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={newPost.imageUrl}
                      onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#e0e4e8] bg-white text-xs focus:border-[#2c3e50] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2c3e50] hover:bg-[#1a252f] transition-colors cursor-pointer"
                    >
                      Publish to Feed
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Posts Stream */}
            <div className="space-y-8">
              {posts.map((post) => {
                const isLiked = !!likedPosts[post.id];

                return (
                  <article
                    key={post.id}
                    className="bg-white border border-[#e0e4e8] overflow-hidden space-y-4 hover:border-[#2c3e50] transition-colors"
                  >
                    {/* Author & Header */}
                    <div className="p-5 pb-0 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center font-bold text-[#2c3e50] text-xs">
                          {post.authorName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#1a1a1a]">
                            {post.authorName}
                          </div>
                          <div className="text-[11px] text-[#7f8c8d]">
                            {post.authorInstitution}
                          </div>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 bg-[#f8f9fa] border border-[#e0e4e8] text-[10px] font-mono text-[#2c3e50] uppercase font-semibold">
                        {post.category}
                      </span>
                    </div>

                    {/* Text Statement */}
                    <div className="px-5 space-y-1.5">
                      <h3 className="text-lg font-medium text-[#1a1a1a]">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#555555] font-sans leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    {/* Architectural Image */}
                    <div className="w-full bg-[#f4f5f7] border-y border-[#e0e4e8] max-h-[460px] overflow-hidden flex items-center justify-center">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-auto object-cover max-h-[460px]"
                      />
                    </div>

                    {/* Interaction Bar */}
                    <div className="px-5 pb-5 space-y-3">
                      <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center gap-6">
                          <button
                            onClick={() => handleToggleLike(post.id)}
                            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                              isLiked ? "text-[#c0392b]" : "text-[#7f8c8d] hover:text-[#1a1a1a]"
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-[#c0392b]" : ""}`} />
                            <span>{post.likesCount} Critiques Applauded</span>
                          </button>

                          <div className="flex items-center gap-1.5 text-[#7f8c8d]">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{post.commentsCount} Reviews</span>
                          </div>
                        </div>

                        <span className="text-[11px] text-[#7f8c8d] font-mono">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Comments Thread */}
                      {post.comments && post.comments.length > 0 && (
                        <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] space-y-2">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#7f8c8d]">
                            Peer Reviews:
                          </div>
                          {post.comments.map((comment, cIdx) => (
                            <div key={cIdx} className="text-xs space-y-0.5 pb-2 border-b border-[#e0e4e8] last:border-b-0 last:pb-0">
                              <div className="text-[#2c3e50] font-medium flex items-center justify-between">
                                <span>{comment.author}</span>
                                <span className="text-[10px] text-[#7f8c8d] font-mono">{comment.timeAgo}</span>
                              </div>
                              <p className="text-[#555555] text-xs leading-relaxed">
                                {comment.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Add Comment Input */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={commentInputs[post.id] || ""}
                          onChange={(e) =>
                            setCommentInputs({ ...commentInputs, [post.id]: e.target.value })
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddComment(post.id);
                          }}
                          placeholder="Submit constructive peer review or structural critique..."
                          className="flex-grow px-3.5 py-2 bg-white border border-[#e0e4e8] text-[#1a1a1a] text-xs focus:border-[#2c3e50] focus:outline-none"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="px-4 py-2 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Critique
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* All Services Sidebar */}
          <AllServicesSidebar />
        </div>
      </section>
    </div>
  );
}
