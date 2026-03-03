<template>
  <div class="flex h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden">

    <!-- ───────────── SIDEBAR ───────────── -->
    <aside
      :class="[
        'flex flex-col bg-gray-900 border-r border-gray-800 transition-all duration-300 shrink-0',
        sidebarOpen ? 'w-60' : 'w-16'
      ]"
    >
      <!-- Brand -->
      <div class="flex items-center gap-3 px-4 py-5 border-b border-gray-800">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
          DPH
        </div>
        <span v-show="sidebarOpen" class="font-semibold text-sm text-gray-100 whitespace-nowrap flex-1">Admin Panel</span>
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="text-gray-500 hover:text-gray-300 hover:bg-gray-800 p-1 rounded transition-colors"
        >
          <svg v-if="sidebarOpen" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7M18 19l-7-7 7-7"/></svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M6 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Nav -->
      <nav class="flex-1 p-2 space-y-0.5 overflow-y-auto">
        <button
          v-for="item in navItems" :key="item.id"
          @click="activeTab = item.id"
          :class="[
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
            activeTab === item.id
              ? 'bg-emerald-500/15 text-emerald-400'
              : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
          ]"
        >
          <span class="text-base shrink-0 w-5 text-center">{{ item.icon }}</span>
          <span v-show="sidebarOpen" class="whitespace-nowrap flex-1 text-left">{{ item.label }}</span>
          <span
            v-if="item.badge && sidebarOpen"
            class="bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center"
          >{{ item.badge }}</span>
          <span
            v-if="item.badge && !sidebarOpen"
            class="absolute left-8 top-0 w-2 h-2 bg-red-500 rounded-full"
          ></span>
        </button>
      </nav>

      <!-- Footer -->
      <div class="p-2 border-t border-gray-800 space-y-0.5">
        <a href="/" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition-colors">
          <span class="text-base shrink-0 w-5 text-center">🏠</span>
          <span v-show="sidebarOpen" class="whitespace-nowrap">View Site</span>
        </a>
        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <span class="text-base shrink-0 w-5 text-center">🚪</span>
          <span v-show="sidebarOpen" class="whitespace-nowrap">Logout</span>
        </button>
      </div>
    </aside>

    <!-- ───────────── MAIN ───────────── -->
    <main class="flex-1 flex flex-col overflow-hidden">

      <!-- Topbar -->
      <header class="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800 shrink-0">
        <div>
          <h1 class="text-lg font-bold text-gray-100">{{ currentPageTitle }}</h1>
          <span class="text-xs text-gray-500 mt-0.5 block">{{ todayLabel }}</span>
        </div>
        <div class="flex items-center gap-3">
          <span v-if="loading" class="text-xs text-emerald-400 animate-pulse">Loading...</span>
          <div class="flex items-center gap-2.5 bg-gray-800 border border-gray-700 rounded-full pl-1.5 pr-4 py-1">
            <div class="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold">
              {{ adminInitials }}
            </div>
            <span class="text-sm font-semibold text-gray-200">{{ adminName }}</span>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">

        <!-- ══════════ OVERVIEW ══════════ -->
        <div v-if="activeTab === 'overview'">
          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div
              v-for="s in overviewStats" :key="s.label"
              class="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-emerald-500/40 transition-colors"
            >
              <span class="text-3xl">{{ s.icon }}</span>
              <div>
                <div class="text-2xl font-bold font-mono text-gray-100">{{ s.value }}</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-medium mt-0.5">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <!-- Recent cards -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-semibold text-gray-200">Recent Blog Posts</h3>
                <button @click="activeTab = 'blog'" class="text-xs text-emerald-400 hover:underline">View All →</button>
              </div>
              <div v-if="blogPosts.length === 0" class="flex flex-col items-center py-8 text-gray-600">
                <span class="text-3xl mb-2">📝</span><p class="text-sm">No blog posts yet</p>
              </div>
              <div
                v-for="post in blogPosts.slice(0, 4)" :key="post._id"
                class="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
              >
                <div>
                  <p class="text-sm font-medium text-gray-200 truncate max-w-[220px]">{{ post.title }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{{ post.category }} · {{ formatDate(post.createdAt) }}</p>
                </div>
                <StatusPill :status="post.isPublished ? 'published' : 'draft'" />
              </div>
            </div>

            <div class="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-semibold text-gray-200">Recent Messages</h3>
                <button @click="activeTab = 'messages'" class="text-xs text-emerald-400 hover:underline">View All →</button>
              </div>
              <div v-if="contacts.length === 0" class="flex flex-col items-center py-8 text-gray-600">
                <span class="text-3xl mb-2">💬</span><p class="text-sm">No messages yet</p>
              </div>
              <div
                v-for="msg in contacts.slice(0, 4)" :key="msg._id"
                class="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
              >
                <div>
                  <p class="text-sm font-medium text-gray-200">{{ msg.name }}</p>
                  <p class="text-xs text-gray-500 mt-0.5 truncate max-w-[220px]">{{ msg.subject }} · {{ formatDate(msg.createdAt) }}</p>
                </div>
                <StatusPill :status="msg.status" />
              </div>
            </div>
          </div>
        </div>

        <!-- ══════════ BLOG ══════════ -->
        <div v-if="activeTab === 'blog'">
          <div class="flex items-center gap-3 mb-5">
            <button @click="openBlogForm()" class="btn-primary">+ New Post</button>
            <select v-model="blogFilter" class="select-field">
              <option value="">All Posts</option>
              <option value="true">Published</option>
              <option value="false">Drafts</option>
            </select>
          </div>

          <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div v-if="filteredBlogPosts.length === 0" class="flex flex-col items-center py-16 text-gray-600">
              <span class="text-4xl mb-3">📝</span>
              <p class="text-sm mb-4">No blog posts found</p>
              <button @click="openBlogForm()" class="btn-primary">Create First Post</button>
            </div>
            <table v-else class="w-full text-sm">
              <thead>
                <tr class="bg-gray-950 border-b border-gray-800">
                  <th class="th">Title</th>
                  <th class="th">Category</th>
                  <th class="th">Author</th>
                  <th class="th">Status</th>
                  <th class="th">Views</th>
                  <th class="th">Date</th>
                  <th class="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in filteredBlogPosts" :key="post._id" class="border-b border-gray-800 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td class="td max-w-[200px] truncate font-medium text-gray-200">{{ post.title }}</td>
                  <td class="td"><span class="category-tag">{{ post.category }}</span></td>
                  <td class="td text-gray-400">{{ post.author }}</td>
                  <td class="td"><StatusPill :status="post.isPublished ? 'published' : 'draft'" /></td>
                  <td class="td font-mono text-gray-400">{{ post.views }}</td>
                  <td class="td text-gray-400 whitespace-nowrap">{{ formatDate(post.createdAt) }}</td>
                  <td class="td">
                    <div class="flex items-center gap-1.5">
                      <button @click="editPost(post)" class="icon-btn" title="Edit">✏️</button>
                      <button @click="togglePublish(post)" class="icon-btn" :title="post.isPublished ? 'Unpublish' : 'Publish'">
                        {{ post.isPublished ? '🔒' : '🌐' }}
                      </button>
                      <button @click="deletePost(post._id)" class="icon-btn-danger" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ══════════ MESSAGES ══════════ -->
        <div v-if="activeTab === 'messages'">
          <div class="flex items-center gap-3 mb-5">
            <select v-model="messageFilter" class="select-field">
              <option value="">All Messages</option>
              <option value="pending">Pending</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
            <span class="text-xs text-gray-500 bg-gray-800 border border-gray-700 rounded-md px-3 py-2">{{ contacts.length }} total</span>
          </div>

          <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div v-if="filteredContacts.length === 0" class="flex flex-col items-center py-16 text-gray-600">
              <span class="text-4xl mb-3">📭</span><p class="text-sm">No messages yet</p>
            </div>
            <table v-else class="w-full text-sm">
              <thead>
                <tr class="bg-gray-950 border-b border-gray-800">
                  <th class="th">Name</th>
                  <th class="th">Email</th>
                  <th class="th">Subject</th>
                  <th class="th">Status</th>
                  <th class="th">Date</th>
                  <th class="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="msg in filteredContacts" :key="msg._id"
                  :class="['border-b border-gray-800 last:border-0 hover:bg-white/[0.02] transition-colors', msg.status === 'pending' ? 'bg-emerald-500/[0.03]' : '']"
                >
                  <td class="td font-medium text-gray-200">{{ msg.name }}</td>
                  <td class="td text-gray-400">{{ msg.email }}</td>
                  <td class="td max-w-[200px] truncate text-gray-300">{{ msg.subject }}</td>
                  <td class="td"><StatusPill :status="msg.status" /></td>
                  <td class="td text-gray-400 whitespace-nowrap">{{ formatDate(msg.createdAt) }}</td>
                  <td class="td">
                    <div class="flex items-center gap-1.5">
                      <button @click="viewMessage(msg)" class="icon-btn" title="View">👁️</button>
                      <button @click="updateStatus(msg._id, 'replied')" class="icon-btn" title="Mark replied">✅</button>
                      <a :href="`mailto:${msg.email}`" class="icon-btn" title="Email">✉️</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ══════════ NEWSLETTER ══════════ -->
        <div v-if="activeTab === 'newsletter'">
          <div class="flex items-center gap-3 mb-5 flex-wrap">
            <div class="flex gap-3">
              <div class="bg-gray-800 rounded-lg px-4 py-2 text-center">
                <span class="block text-xl font-bold font-mono text-emerald-400">{{ newsletterStats.active }}</span>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Active</span>
              </div>
              <div class="bg-gray-800 rounded-lg px-4 py-2 text-center">
                <span class="block text-xl font-bold font-mono text-gray-300">{{ newsletterStats.total }}</span>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Total</span>
              </div>
            </div>
            <select v-model="subscriberFilter" class="select-field">
              <option value="">All Subscribers</option>
              <option value="true">Active</option>
              <option value="false">Unsubscribed</option>
            </select>
          </div>

          <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div v-if="filteredSubscribers.length === 0" class="flex flex-col items-center py-16 text-gray-600">
              <span class="text-4xl mb-3">📧</span><p class="text-sm">No subscribers yet</p>
            </div>
            <table v-else class="w-full text-sm">
              <thead>
                <tr class="bg-gray-950 border-b border-gray-800">
                  <th class="th">Email</th>
                  <th class="th">Name</th>
                  <th class="th">Status</th>
                  <th class="th">Subscribed</th>
                  <th class="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="sub in filteredSubscribers" :key="sub._id" class="border-b border-gray-800 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td class="td text-gray-200">{{ sub.email }}</td>
                  <td class="td text-gray-400">{{ sub.name || '—' }}</td>
                  <td class="td"><StatusPill :status="sub.isActive ? 'published' : 'draft'" :label="sub.isActive ? 'Active' : 'Unsubscribed'" /></td>
                  <td class="td text-gray-400 whitespace-nowrap">{{ formatDate(sub.subscribedAt) }}</td>
                  <td class="td">
                    <button @click="deleteSubscriber(sub._id)" class="icon-btn-danger" title="Remove">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ══════════ USERS ══════════ -->
        <div v-if="activeTab === 'users'">
          <div class="flex items-center gap-3 mb-5 flex-wrap">
            <input v-model="userSearch" type="text" placeholder="Search users..." class="input-field w-56" />
            <select v-model="userRoleFilter" class="select-field">
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="advisor">Advisor</option>
            </select>
          </div>

          <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div v-if="filteredUsers.length === 0" class="flex flex-col items-center py-16 text-gray-600">
              <span class="text-4xl mb-3">👥</span><p class="text-sm">No users found</p>
            </div>
            <table v-else class="w-full text-sm">
              <thead>
                <tr class="bg-gray-950 border-b border-gray-800">
                  <th class="th">Name</th>
                  <th class="th">Email</th>
                  <th class="th">Role</th>
                  <th class="th">Joined</th>
                  <th class="th">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in filteredUsers" :key="user._id" class="border-b border-gray-800 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td class="td font-medium text-gray-200">{{ user.firstName }} {{ user.lastName }}</td>
                  <td class="td text-gray-400">{{ user.email }}</td>
                  <td class="td">
                    <select
                      :value="user.role"
                      @change="updateUserRole(user._id, ($event.target as HTMLSelectElement).value as User['role'])"
                      class="bg-gray-800 border border-gray-700 rounded-md text-gray-300 text-xs px-2 py-1.5 cursor-pointer focus:outline-none focus:border-emerald-500"
                    >
                      <option value="user">User</option>
                      <option value="advisor">Advisor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td class="td text-gray-400 whitespace-nowrap">{{ formatDate(user.createdAt) }}</td>
                  <td class="td">
                    <button @click="deleteUser(user._id)" class="icon-btn-danger" title="Delete">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>

    <!-- ───────────── BLOG MODAL ───────────── -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showBlogForm"
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          @click.self="showBlogForm = false"
        >
          <div class="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h3 class="text-base font-bold text-gray-100">{{ editingPost ? 'Edit Post' : 'New Blog Post' }}</h3>
              <button @click="showBlogForm = false" class="text-gray-500 hover:text-gray-300 hover:bg-gray-800 p-1.5 rounded-lg transition-colors">✕</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              <div class="md:col-span-2">
                <label class="form-label">Title *</label>
                <input v-model="blogForm.title" type="text" placeholder="Post title..." class="input-field w-full" />
              </div>
              <div>
                <label class="form-label">Category *</label>
                <select v-model="blogForm.category" class="select-field w-full">
                  <option>Market Insights</option>
                  <option>Investment Tips</option>
                  <option>Company News</option>
                  <option>Economic Analysis</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label class="form-label">Author</label>
                <input v-model="blogForm.author" type="text" placeholder="Author name" class="input-field w-full" />
              </div>
              <div class="md:col-span-2">
                <label class="form-label">Excerpt * <span class="text-gray-600 normal-case">(max 300 chars)</span></label>
                <textarea v-model="blogForm.excerpt" rows="2" maxlength="300" placeholder="Brief summary..." class="input-field w-full resize-none"></textarea>
              </div>
              <div class="md:col-span-2">
                <label class="form-label">Content *</label>
                <textarea v-model="blogForm.content" rows="10" placeholder="Write your post content here..." class="input-field w-full font-mono text-xs resize-y min-h-[180px]"></textarea>
              </div>
              <div>
                <label class="form-label">Cover Image URL</label>
                <input v-model="blogForm.coverImage" type="text" placeholder="https://..." class="input-field w-full" />
              </div>
              <div>
                <label class="form-label">Tags (comma separated)</label>
                <input v-model="blogForm.tagsInput" type="text" placeholder="finance, investment, news" class="input-field w-full" />
              </div>
              <div class="md:col-span-2">
                <label class="flex items-center gap-2.5 cursor-pointer">
                  <input v-model="blogForm.isPublished" type="checkbox" class="w-4 h-4 accent-emerald-500 cursor-pointer" />
                  <span class="text-sm text-gray-300">Publish immediately</span>
                </label>
              </div>
            </div>

            <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-800">
              <button @click="showBlogForm = false" class="btn-secondary">Cancel</button>
              <button @click="saveBlogPost" class="btn-primary" :disabled="blogLoading">
                {{ blogLoading ? 'Saving...' : editingPost ? 'Update Post' : 'Create Post' }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ───────────── MESSAGE MODAL ───────────── -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedMessage"
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          @click.self="selectedMessage = null"
        >
          <div class="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h3 class="text-base font-bold text-gray-100 truncate max-w-[380px]">{{ selectedMessage.subject }}</h3>
              <button @click="selectedMessage = null" class="text-gray-500 hover:text-gray-300 hover:bg-gray-800 p-1.5 rounded-lg transition-colors">✕</button>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-x-6 gap-y-1 bg-gray-950 rounded-lg p-4 mb-4 text-sm text-gray-400">
                <span><strong class="text-gray-200">From:</strong> {{ selectedMessage.name }}</span>
                <span><strong class="text-gray-200">Email:</strong> {{ selectedMessage.email }}</span>
                <span><strong class="text-gray-200">Date:</strong> {{ formatDate(selectedMessage.createdAt) }}</span>
              </div>
              <div class="bg-gray-950 rounded-lg p-4 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{{ selectedMessage.message }}</div>
            </div>
            <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-800">
              <button @click="selectedMessage = null" class="btn-secondary">Close</button>
              <a :href="`mailto:${selectedMessage.email}`" class="btn-primary">Reply via Email</a>
              <button @click="updateStatus(selectedMessage._id, 'replied'); selectedMessage = null" class="btn-primary">
                Mark Replied
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ───────────── TOAST ───────────── -->
    <Teleport to="body">
      <Transition name="slide-up">
        <div
          v-if="toast.show"
          :class="[
            'fixed bottom-6 right-6 z-[9999] px-4 py-3 rounded-xl border text-sm font-medium shadow-2xl flex items-center gap-2',
            toast.type === 'success'
              ? 'bg-gray-900 border-emerald-500/40 text-emerald-300 border-l-2 border-l-emerald-500'
              : 'bg-gray-900 border-red-500/40 text-red-300 border-l-2 border-l-red-500'
          ]"
        >
          <span>{{ toast.type === 'success' ? '✓' : '✕' }}</span>
          {{ toast.message }}
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import { logout, getUserFromStorage } from '../services/authservice'

// ─────────────────────────────────────────
//  Import API service (uncomment when backend is ready)
//  import { blogApi, contactsApi, newsletterApi, usersApi } from '../services/adminApi'
//  import type { Post, Contact, Subscriber, User } from '../services/adminApi'
// ─────────────────────────────────────────
//  Until then, types are defined inline below so the file compiles:

interface Post {
  _id: string; title: string; excerpt: string; content: string
  category: string; author: string; coverImage?: string
  tags: string[]; isPublished: boolean; views: number; createdAt: string
}
interface Contact {
  _id: string; name: string; email: string; subject: string
  message: string; status: 'pending' | 'read' | 'replied'; createdAt: string
}
interface Subscriber {
  _id: string; email: string; name?: string; isActive: boolean; subscribedAt: string
}
interface User {
  _id: string; firstName: string; lastName: string; email: string
  role: 'user' | 'advisor' | 'admin'; createdAt: string
}

// ─────────────────────────────────────────
//  StatusPill helper component (inline)
// ─────────────────────────────────────────
const StatusPill = {
  props: { status: String, label: String },
  template: `
    <span :class="['inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border', cls]">
      {{ label || status }}
    </span>`,
  computed: {
    cls() {
      const map: Record<string, string> = {
        published: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        draft:     'bg-gray-500/15 text-gray-400 border-gray-500/30',
        pending:   'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
        read:      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        replied:   'bg-blue-500/15 text-blue-400 border-blue-500/30',
      }
      return map[(this as any).status] ?? map.draft
    }
  }
}

// ─────────────────────────────────────────
//  MOCK DATA (remove once API is live)
// ─────────────────────────────────────────
const MOCK_POSTS: Post[] = [
  { _id: 'b1', title: 'Understanding Market Volatility in 2024', category: 'Market Insights', author: 'DPH Admin', isPublished: true, views: 1240, createdAt: '2024-11-15', excerpt: 'A deep dive into the causes and effects of market volatility.', content: 'Lorem ipsum dolor sit amet...', tags: ['market', 'volatility'] },
  { _id: 'b2', title: 'Top 5 Investment Strategies for Beginners', category: 'Investment Tips', author: 'DPH Admin', isPublished: true, views: 890, createdAt: '2024-11-10', excerpt: 'Essential strategies every new investor should know.', content: 'Lorem ipsum dolor sit amet...', tags: ['investment', 'beginners'] },
  { _id: 'b3', title: 'Q3 Economic Analysis Report', category: 'Economic Analysis', author: 'Sarah Okafor', isPublished: false, views: 0, createdAt: '2024-11-08', excerpt: 'Comprehensive analysis of Q3 economic indicators.', content: 'Lorem ipsum dolor sit amet...', tags: ['economy', 'analysis'] },
  { _id: 'b4', title: 'DPH Expands to East Africa', category: 'Company News', author: 'DPH Admin', isPublished: true, views: 456, createdAt: '2024-11-01', excerpt: 'DPH is proud to announce expansion into East Africa.', content: 'Lorem ipsum dolor sit amet...', tags: ['company', 'expansion'] },
  { _id: 'b5', title: 'The Future of Digital Finance', category: 'General', author: 'Emeka Nwosu', isPublished: false, views: 0, createdAt: '2024-10-25', excerpt: 'Exploring where digital finance is headed.', content: 'Lorem ipsum dolor sit amet...', tags: ['digital', 'finance'] },
]
const MOCK_CONTACTS: Contact[] = [
  { _id: 'c1', name: 'Amara Chukwu', email: 'amara@example.com', subject: 'Investment Inquiry', message: 'Hello, I would like to learn more about your investment services.', status: 'pending', createdAt: '2024-11-18' },
  { _id: 'c2', name: 'James Adeyemi', email: 'james@example.com', subject: 'Portfolio Review Request', message: 'I have been a client for 2 years and would like to schedule a portfolio review.', status: 'pending', createdAt: '2024-11-17' },
  { _id: 'c3', name: 'Fatima Al-Hassan', email: 'fatima@example.com', subject: 'Question about fees', message: 'What are your management fees for a portfolio of $50,000?', status: 'pending', createdAt: '2024-11-16' },
  { _id: 'c4', name: 'Bola Tinubu', email: 'bola@example.com', subject: 'Partnership Opportunity', message: 'We are interested in exploring a partnership with DPH.', status: 'read', createdAt: '2024-11-14' },
  { _id: 'c5', name: 'Grace Osei', email: 'grace@example.com', subject: 'Newsletter Subscription Issue', message: 'I tried to unsubscribe but keep receiving emails.', status: 'replied', createdAt: '2024-11-12' },
]
const MOCK_SUBSCRIBERS: Subscriber[] = [
  { _id: 's1', email: 'amara@example.com', name: 'Amara Chukwu', isActive: true, subscribedAt: '2024-09-01' },
  { _id: 's2', email: 'james@example.com', name: 'James Adeyemi', isActive: true, subscribedAt: '2024-09-15' },
  { _id: 's3', email: 'fatima@example.com', name: 'Fatima Al-Hassan', isActive: true, subscribedAt: '2024-10-01' },
  { _id: 's4', email: 'bola@example.com', name: 'Bola Tinubu', isActive: false, subscribedAt: '2024-08-20' },
  { _id: 's5', email: 'grace@example.com', name: 'Grace Osei', isActive: true, subscribedAt: '2024-10-10' },
]
const MOCK_USERS: User[] = [
  { _id: 'u1', firstName: 'John', lastName: 'Doe', email: 'john@dph.com', role: 'admin', createdAt: '2024-01-15' },
  { _id: 'u2', firstName: 'Sarah', lastName: 'Okafor', email: 'sarah@dph.com', role: 'advisor', createdAt: '2024-03-10' },
  { _id: 'u3', firstName: 'Emeka', lastName: 'Nwosu', email: 'emeka@dph.com', role: 'advisor', createdAt: '2024-04-20' },
  { _id: 'u4', firstName: 'Amara', lastName: 'Chukwu', email: 'amara@example.com', role: 'user', createdAt: '2024-09-01' },
  { _id: 'u5', firstName: 'James', lastName: 'Adeyemi', email: 'james@example.com', role: 'user', createdAt: '2024-09-15' },
]

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
const router   = useRouter()
const loading  = ref(false)
const sidebarOpen = ref(true)
const activeTab   = ref('overview')

const currentUser  = getUserFromStorage()
const adminName    = computed(() => currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Admin')
const adminInitials = computed(() => currentUser ? `${currentUser.firstName[0]}${currentUser.lastName[0]}` : 'AD')
const todayLabel   = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

// Data refs
const blogPosts   = ref<Post[]>([])
const contacts    = ref<Contact[]>([])
const subscribers = ref<Subscriber[]>([])
const users       = ref<User[]>([])

// Filters
const blogFilter       = ref('')
const messageFilter    = ref('')
const subscriberFilter = ref('')
const userSearch       = ref('')
const userRoleFilter   = ref('')

// ─────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────
const navItems = computed(() => [
  { id: 'overview',    label: 'Overview',    icon: '📊', badge: null },
  { id: 'blog',        label: 'Blog Posts',  icon: '📝', badge: null },
  { id: 'messages',    label: 'Messages',    icon: '💬', badge: contacts.value.filter(c => c.status === 'pending').length || null },
  { id: 'newsletter',  label: 'Newsletter',  icon: '📧', badge: null },
  { id: 'users',       label: 'Users',       icon: '👥', badge: null },
])

const currentPageTitle = computed(() =>
  navItems.value.find(n => n.id === activeTab.value)?.label ?? 'Dashboard'
)

// ─────────────────────────────────────────
//  COMPUTED / FILTERS
// ─────────────────────────────────────────
const filteredBlogPosts = computed(() => {
  if (!blogFilter.value) return blogPosts.value
  return blogPosts.value.filter(p => String(p.isPublished) === blogFilter.value)
})

const filteredContacts = computed(() => {
  if (!messageFilter.value) return contacts.value
  return contacts.value.filter(c => c.status === messageFilter.value)
})

const filteredSubscribers = computed(() => {
  if (!subscriberFilter.value) return subscribers.value
  return subscribers.value.filter(s => String(s.isActive) === subscriberFilter.value)
})

const filteredUsers = computed(() => {
  let result = users.value
  if (userRoleFilter.value) result = result.filter(u => u.role === userRoleFilter.value)
  if (userSearch.value) {
    const q = userSearch.value.toLowerCase()
    result = result.filter(u =>
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    )
  }
  return result
})

const overviewStats = computed(() => [
  { icon: '📝', label: 'Blog Posts',  value: blogPosts.value.length },
  { icon: '📧', label: 'Subscribers', value: subscribers.value.filter(s => s.isActive).length },
  { icon: '💬', label: 'Messages',    value: contacts.value.length },
  { icon: '👥', label: 'Users',       value: users.value.length },
])

const newsletterStats = computed(() => ({
  active: subscribers.value.filter(s => s.isActive).length,
  total:  subscribers.value.length,
}))

// ─────────────────────────────────────────
//  TOAST
// ─────────────────────────────────────────
const toast = reactive({ show: false, message: '', type: 'success' as 'success' | 'error' })
let toastTimer: ReturnType<typeof setTimeout>
function showToast(message: string, type: 'success' | 'error' = 'success') {
  clearTimeout(toastTimer)
  Object.assign(toast, { show: true, message, type })
  toastTimer = setTimeout(() => (toast.show = false), 2800)
}

// ─────────────────────────────────────────
//  UTILS
// ─────────────────────────────────────────
const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// ─────────────────────────────────────────
//  FETCH ALL DATA
//  ↓↓ REPLACE mock assignments with real API calls once backend is ready ↓↓
// ─────────────────────────────────────────
async function fetchAll() {
  loading.value = true
  try {
    /*
     * ── REAL API (uncomment when backend is ready) ──────────────────
     * const [blogRes, contactRes, subRes, usersRes] = await Promise.allSettled([
     *   blogApi.getAll(),
     *   contactsApi.getAll(),
     *   newsletterApi.getAll(),
     *   usersApi.getAll(),
     * ])
     * if (blogRes.status    === 'fulfilled') blogPosts.value   = blogRes.value.data
     * if (contactRes.status === 'fulfilled') contacts.value    = contactRes.value.data
     * if (subRes.status     === 'fulfilled') subscribers.value = subRes.value.data
     * if (usersRes.status   === 'fulfilled') users.value       = usersRes.value.data
     * ────────────────────────────────────────────────────────────────
     */

    // ── MOCK (remove when real API is wired up) ──
    blogPosts.value   = MOCK_POSTS
    contacts.value    = MOCK_CONTACTS
    subscribers.value = MOCK_SUBSCRIBERS
    users.value       = MOCK_USERS
  } catch (err) {
    showToast('Failed to load data', 'error')
  } finally {
    loading.value = false
  }
}

// ─────────────────────────────────────────
//  BLOG ACTIONS
// ─────────────────────────────────────────
const showBlogForm  = ref(false)
const editingPost   = ref<Post | null>(null)
const blogLoading   = ref(false)
const blogForm = reactive({
  title: '', excerpt: '', content: '', category: 'General',
  author: 'DPH Admin', coverImage: '', tagsInput: '', isPublished: false,
})

function openBlogForm() {
  editingPost.value = null
  Object.assign(blogForm, { title: '', excerpt: '', content: '', category: 'General', author: 'DPH Admin', coverImage: '', tagsInput: '', isPublished: false })
  showBlogForm.value = true
}

function editPost(post: Post) {
  editingPost.value = post
  Object.assign(blogForm, {
    title: post.title, excerpt: post.excerpt, content: post.content,
    category: post.category, author: post.author,
    coverImage: post.coverImage ?? '', tagsInput: post.tags.join(', '),
    isPublished: post.isPublished,
  })
  showBlogForm.value = true
}

async function saveBlogPost() {
  if (!blogForm.title || !blogForm.content || !blogForm.excerpt) {
    showToast('Please fill in title, excerpt and content', 'error')
    return
  }
  blogLoading.value = true
  const payload = {
    ...blogForm,
    tags: blogForm.tagsInput.split(',').map(t => t.trim()).filter(Boolean),
  }
  try {
    if (editingPost.value) {
      /*
       * ── REAL API ──
       * const res = await blogApi.update(editingPost.value._id, payload)
       * const idx = blogPosts.value.findIndex(p => p._id === editingPost.value!._id)
       * if (idx !== -1) blogPosts.value[idx] = res.data
       */
      // ── MOCK ──
      const idx = blogPosts.value.findIndex(p => p._id === editingPost.value!._id)
      if (idx !== -1) blogPosts.value[idx] = { ...blogPosts.value[idx], ...payload }
      showToast('Post updated successfully')r
    } else {
      /*
       * ── REAL API ──
       * const res = await blogApi.create(payload)
       * blogPosts.value.unshift(res.data)
       */
      // ── MOCK ──
      blogPosts.value.unshift({ _id: `_${Date.now()}`, views: 0, createdAt: new Date().toISOString().split('T')[0]!, ...payload } as Post)
      showToast('Post created successfully')
    }
    showBlogForm.value = false
  } catch (err: any) {
    showToast(err.message ?? 'Failed to save post', 'error')
  } finally {
    blogLoading.value = false
  }
}

async function togglePublish(post: Post) {
  try {
    /*
     * ── REAL API ──
     * const res = await blogApi.update(post._id, { isPublished: !post.isPublished })
     * const idx = blogPosts.value.findIndex(p => p._id === post._id)
     * if (idx !== -1) blogPosts.value[idx] = res.data
     */
    // ── MOCK ──
    const idx = blogPosts.value.findIndex(p => p._id === post._id)
    if (idx !== -1) blogPosts.value[idx] = { ...post, isPublished: !post.isPublished }
    showToast(post.isPublished ? 'Post unpublished' : 'Post published')
  } catch (err: any) {
    showToast(err.message ?? 'Failed to update post', 'error')
  }
}

async function deletePost(id: string) {
  if (!confirm('Delete this post? This cannot be undone.')) return
  try {
    /*
     * ── REAL API ──
     * await blogApi.delete(id)
     */
    // ── MOCK ──
    blogPosts.value = blogPosts.value.filter(p => p._id !== id)
    showToast('Post deleted')
  } catch (err: any) {
    showToast(err.message ?? 'Failed to delete post', 'error')
  }
}

// ─────────────────────────────────────────
//  MESSAGE ACTIONS
// ─────────────────────────────────────────
const selectedMessage = ref<Contact | null>(null)

function viewMessage(msg: Contact) {
  selectedMessage.value = msg
  updateStatus(msg._id, 'read')
}

async function updateStatus(id: string, status: Contact['status']) {
  try {
    /*
     * ── REAL API ──
     * await contactsApi.updateStatus(id, status)
     */
    // ── MOCK ──
    const idx = contacts.value.findIndex(c => c._id === id)
    if (idx !== -1) contacts.value[idx] = { ...contacts.value[idx], status } as Contact
  } catch (err: any) {
    showToast(err.message ?? 'Failed to update status', 'error')
  }
}

// ─────────────────────────────────────────
//  NEWSLETTER ACTIONS
// ─────────────────────────────────────────
async function deleteSubscriber(id: string) {
  if (!confirm('Remove this subscriber?')) return
  try {
    /*
     * ── REAL API ──
     * await newsletterApi.delete(id)
     */
    // ── MOCK ──
    subscribers.value = subscribers.value.filter(s => s._id !== id)
    showToast('Subscriber removed')
  } catch (err: any) {
    showToast(err.message ?? 'Failed to remove subscriber', 'error')
  }
}

// ─────────────────────────────────────────
//  USER ACTIONS
// ─────────────────────────────────────────
async function updateUserRole(id: string, role: User['role']) {
  try {
    /*
     * ── REAL API ──
     * await usersApi.updateRole(id, role)
     */
    // ── MOCK ──
    const idx = users.value.findIndex(u => u._id === id)
    if (idx !== -1) users.value[idx] = { ...users.value[idx], role } as User
    showToast('Role updated')
  } catch (err: any) {
    showToast(err.message ?? 'Failed to update role', 'error')
  }
}

async function deleteUser(id: string) {
  if (!confirm('Delete this user?')) return
  try {
    /*
     * ── REAL API ──
     * await usersApi.delete(id)
     */
    // ── MOCK ──
    users.value = users.value.filter(u => u._id !== id)
    showToast('User deleted')
  } catch (err: any) {
    showToast(err.message ?? 'Failed to delete user', 'error')
  }
}

// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
async function handleLogout() {
  await logout()
  router.push('/login')
}

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
onMounted(fetchAll)
</script>

<style scoped>
/* All layout/utility is Tailwind. Only transitions live here. */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-up-enter-active, .slide-up-leave-active { transition: opacity 0.25s, transform 0.25s; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(16px); }

/* Reusable Tailwind @apply shortcuts */
.th {
  @apply px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider;
}
.td {
  @apply px-4 py-3 text-sm;
}
.btn-primary {
  @apply bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center gap-1.5;
}
.btn-secondary {
  @apply bg-gray-800 text-gray-200 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-lg hover:border-gray-500 transition-colors;
}
.icon-btn {
  @apply bg-gray-800 border border-gray-700 rounded-md px-2 py-1.5 text-sm cursor-pointer hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all inline-flex;
}
.icon-btn-danger {
  @apply bg-gray-800 border border-gray-700 rounded-md px-2 py-1.5 text-sm cursor-pointer hover:border-red-500/60 hover:bg-red-500/10 transition-all inline-flex;
}
.select-field {
  @apply bg-gray-900 border border-gray-700 rounded-lg text-gray-300 text-sm px-3 py-2 focus:outline-none focus:border-emerald-500 transition-colors;
}
.input-field {
  @apply bg-gray-950 border border-gray-700 rounded-lg text-gray-200 text-sm px-3 py-2.5 focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600;
}
.form-label {
  @apply block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5;
}
.category-tag {
  @apply bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded px-2 py-0.5 text-xs font-medium;
}
</style>