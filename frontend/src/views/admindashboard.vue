<template>
  <div class="admin-shell">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-brand">
        <div class="brand-logo">DPH</div>
        <span class="brand-name">Admin Panel</span>
        <button class="collapse-btn" @click="sidebarCollapsed = !sidebarCollapsed">
          {{ sidebarCollapsed ? '→' : '←' }}
        </button>
      </div>

      <nav class="sidebar-nav">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="nav-item"
          :class="{ active: activeTab === item.id }"
          @click="activeTab = item.id"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
          <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/" class="nav-item">
          <span class="nav-icon">🏠</span>
          <span class="nav-label">View Site</span>
        </router-link>
        <button class="nav-item logout-btn" @click="handleLogout">
          <span class="nav-icon">🚪</span>
          <span class="nav-label">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      <!-- Top Bar -->
      <header class="topbar">
        <div class="topbar-left">
          <h1 class="page-title">{{ currentPageTitle }}</h1>
          <span class="page-subtitle">{{ new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        </div>
        <div class="topbar-right">
          <div class="admin-badge">
            <span class="admin-avatar">{{ adminInitials }}</span>
            <span class="admin-name">{{ adminName }}</span>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="content-area">

        <!-- OVERVIEW TAB -->
        <div v-if="activeTab === 'overview'" class="tab-content">
          <div class="stats-grid">
            <div class="stat-card" v-for="stat in overviewStats" :key="stat.label">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-info">
                <div class="stat-number">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <div class="overview-grid">
            <div class="overview-card">
              <div class="card-header">
                <h3>Recent Blog Posts</h3>
                <button class="btn-link" @click="activeTab = 'blog'">View All →</button>
              </div>
              <div v-if="blogPosts.length === 0" class="empty-state">
                <span>📝</span><p>No blog posts yet</p>
              </div>
              <div v-for="post in blogPosts.slice(0, 4)" :key="post._id" class="mini-item">
                <div class="mini-item-info">
                  <span class="mini-title">{{ post.title }}</span>
                  <span class="mini-meta">{{ post.category }} · {{ formatDate(post.createdAt) }}</span>
                </div>
                <span class="status-pill" :class="post.isPublished ? 'published' : 'draft'">
                  {{ post.isPublished ? 'Live' : 'Draft' }}
                </span>
              </div>
            </div>

            <div class="overview-card">
              <div class="card-header">
                <h3>Recent Messages</h3>
                <button class="btn-link" @click="activeTab = 'messages'">View All →</button>
              </div>
              <div v-if="contacts.length === 0" class="empty-state">
                <span>💬</span><p>No messages yet</p>
              </div>
              <div v-for="msg in contacts.slice(0, 4)" :key="msg._id" class="mini-item">
                <div class="mini-item-info">
                  <span class="mini-title">{{ msg.name }}</span>
                  <span class="mini-meta">{{ msg.subject }} · {{ formatDate(msg.createdAt) }}</span>
                </div>
                <span class="status-pill" :class="msg.status">{{ msg.status }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOG TAB -->
        <div v-if="activeTab === 'blog'" class="tab-content">
          <div class="tab-toolbar">
            <button class="btn-primary" @click="showBlogForm = true; editingPost = null; resetBlogForm()">
              + New Post
            </button>
            <select v-model="blogFilter" class="filter-select">
              <option value="">All Posts</option>
              <option value="true">Published</option>
              <option value="false">Drafts</option>
            </select>
          </div>

          <!-- Blog Form Modal -->
          <div v-if="showBlogForm" class="modal-overlay" @click.self="showBlogForm = false">
            <div class="modal-box large">
              <div class="modal-header">
                <h3>{{ editingPost ? 'Edit Post' : 'New Blog Post' }}</h3>
                <button @click="showBlogForm = false" class="modal-close">✕</button>
              </div>
              <div class="form-grid">
                <div class="form-group full">
                  <label>Title *</label>
                  <input v-model="blogForm.title" type="text" placeholder="Post title..." class="form-input" />
                </div>
                <div class="form-group">
                  <label>Category *</label>
                  <select v-model="blogForm.category" class="form-input">
                    <option value="Market Insights">Market Insights</option>
                    <option value="Investment Tips">Investment Tips</option>
                    <option value="Company News">Company News</option>
                    <option value="Economic Analysis">Economic Analysis</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Author</label>
                  <input v-model="blogForm.author" type="text" placeholder="Author name" class="form-input" />
                </div>
                <div class="form-group full">
                  <label>Excerpt * <small>(max 300 chars)</small></label>
                  <textarea v-model="blogForm.excerpt" rows="2" placeholder="Brief summary..." class="form-input" maxlength="300"></textarea>
                </div>
                <div class="form-group full">
                  <label>Content *</label>
                  <textarea v-model="blogForm.content" rows="10" placeholder="Write your post content here..." class="form-input content-editor"></textarea>
                </div>
                <div class="form-group">
                  <label>Cover Image URL</label>
                  <input v-model="blogForm.coverImage" type="text" placeholder="https://..." class="form-input" />
                </div>
                <div class="form-group">
                  <label>Tags (comma separated)</label>
                  <input v-model="blogForm.tagsInput" type="text" placeholder="finance, investment, news" class="form-input" />
                </div>
                <div class="form-group full">
                  <label class="checkbox-label">
                    <input v-model="blogForm.isPublished" type="checkbox" />
                    <span>Publish immediately</span>
                  </label>
                </div>
              </div>
              <div class="modal-footer">
                <button @click="showBlogForm = false" class="btn-secondary">Cancel</button>
                <button @click="saveBlogPost" class="btn-primary" :disabled="blogLoading">
                  {{ blogLoading ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post') }}
                </button>
              </div>
            </div>
          </div>

          <!-- Blog Posts Table -->
          <div class="data-table">
            <div v-if="filteredBlogPosts.length === 0" class="empty-state large">
              <span>📝</span>
              <p>No blog posts found</p>
              <button class="btn-primary" @click="showBlogForm = true">Create First Post</button>
            </div>
            <table v-else>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in filteredBlogPosts" :key="post._id">
                  <td class="title-cell">{{ post.title }}</td>
                  <td><span class="category-tag">{{ post.category }}</span></td>
                  <td>{{ post.author }}</td>
                  <td>
                    <span class="status-pill" :class="post.isPublished ? 'published' : 'draft'">
                      {{ post.isPublished ? 'Published' : 'Draft' }}
                    </span>
                  </td>
                  <td>{{ post.views }}</td>
                  <td>{{ formatDate(post.createdAt) }}</td>
                  <td class="actions-cell">
                    <button @click="editPost(post)" class="btn-icon" title="Edit">✏️</button>
                    <button @click="togglePublish(post)" class="btn-icon" :title="post.isPublished ? 'Unpublish' : 'Publish'">
                      {{ post.isPublished ? '🔒' : '🌐' }}
                    </button>
                    <button @click="deletePost(post._id)" class="btn-icon danger" title="Delete">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MESSAGES TAB -->
        <div v-if="activeTab === 'messages'" class="tab-content">
          <div class="tab-toolbar">
            <select v-model="messageFilter" class="filter-select">
              <option value="">All Messages</option>
              <option value="pending">Pending</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
            <span class="count-badge">{{ contacts.length }} total</span>
          </div>

          <!-- Message Detail Modal -->
          <div v-if="selectedMessage" class="modal-overlay" @click.self="selectedMessage = null">
            <div class="modal-box">
              <div class="modal-header">
                <h3>{{ selectedMessage.subject }}</h3>
                <button @click="selectedMessage = null" class="modal-close">✕</button>
              </div>
              <div class="message-detail">
                <div class="message-meta-row">
                  <span><strong>From:</strong> {{ selectedMessage.name }}</span>
                  <span><strong>Email:</strong> {{ selectedMessage.email }}</span>
                  <span><strong>Date:</strong> {{ formatDate(selectedMessage.createdAt) }}</span>
                </div>
                <div class="message-body">{{ selectedMessage.message }}</div>
              </div>
              <div class="modal-footer">
                <button @click="selectedMessage = null" class="btn-secondary">Close</button>
                <a :href="`mailto:${selectedMessage.email}`" class="btn-primary">Reply via Email</a>
                <button @click="updateStatus(selectedMessage._id, 'replied')" class="btn-primary">
                  Mark Replied
                </button>
              </div>
            </div>
          </div>

          <div class="data-table">
            <div v-if="contacts.length === 0" class="empty-state large">
              <span>📭</span><p>No messages yet</p>
            </div>
            <table v-else>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="msg in filteredContacts" :key="msg._id" :class="{ unread: msg.status === 'pending' }">
                  <td>{{ msg.name }}</td>
                  <td>{{ msg.email }}</td>
                  <td class="title-cell">{{ msg.subject }}</td>
                  <td><span class="status-pill" :class="msg.status">{{ msg.status }}</span></td>
                  <td>{{ formatDate(msg.createdAt) }}</td>
                  <td class="actions-cell">
                    <button @click="selectedMessage = msg; updateStatus(msg._id, 'read')" class="btn-icon">👁️</button>
                    <button @click="updateStatus(msg._id, 'replied')" class="btn-icon">✅</button>
                    <a :href="`mailto:${msg.email}`" class="btn-icon">✉️</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- NEWSLETTER TAB -->
        <div v-if="activeTab === 'newsletter'" class="tab-content">
          <div class="tab-toolbar">
            <div class="newsletter-stats">
              <div class="mini-stat">
                <span class="mini-stat-num">{{ newsletterStats.active }}</span>
                <span class="mini-stat-label">Active</span>
              </div>
              <div class="mini-stat">
                <span class="mini-stat-num">{{ newsletterStats.total }}</span>
                <span class="mini-stat-label">Total</span>
              </div>
            </div>
            <select v-model="subscriberFilter" class="filter-select">
              <option value="">All Subscribers</option>
              <option value="true">Active</option>
              <option value="false">Unsubscribed</option>
            </select>
          </div>

          <div class="data-table">
            <div v-if="subscribers.length === 0" class="empty-state large">
              <span>📧</span><p>No subscribers yet</p>
            </div>
            <table v-else>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Subscribed</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="sub in filteredSubscribers" :key="sub._id">
                  <td>{{ sub.email }}</td>
                  <td>{{ sub.name || '—' }}</td>
                  <td>
                    <span class="status-pill" :class="sub.isActive ? 'published' : 'draft'">
                      {{ sub.isActive ? 'Active' : 'Unsubscribed' }}
                    </span>
                  </td>
                  <td>{{ formatDate(sub.subscribedAt) }}</td>
                  <td class="actions-cell">
                    <button @click="deleteSubscriber(sub._id)" class="btn-icon danger">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- USERS TAB -->
        <div v-if="activeTab === 'users'" class="tab-content">
          <div class="tab-toolbar">
            <input v-model="userSearch" type="text" placeholder="Search users..." class="search-input" />
            <select v-model="userRoleFilter" class="filter-select">
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="advisor">Advisor</option>
            </select>
          </div>

          <div class="data-table">
            <div v-if="users.length === 0" class="empty-state large">
              <span>👥</span><p>No users found</p>
            </div>
            <table v-else>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in filteredUsers" :key="user._id">
                  <td>{{ user.firstName }} {{ user.lastName }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <select
                      :value="user.role"
                      @change="updateUserRole(user._id, ($event.target as HTMLSelectElement).value)"
                      class="role-select"
                    >
                      <option value="user">User</option>
                      <option value="advisor">Advisor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>{{ formatDate(user.createdAt) }}</td>
                  <td class="actions-cell">
                    <button @click="deleteUser(user._id)" class="btn-icon danger">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import { logout, getUserFromStorage } from '../services/authservice'

const router = useRouter()
const sidebarCollapsed = ref(false)
const activeTab = ref('overview')

// Auth
const currentUser = getUserFromStorage()
const adminName = computed(() => currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Admin')
const adminInitials = computed(() => currentUser ? `${currentUser.firstName[0]}${currentUser.lastName[0]}` : 'AD')

// Nav items
const navItems = ref([
  { id: 'overview', label: 'Overview', icon: '📊', badge: null },
  { id: 'blog', label: 'Blog Posts', icon: '📝', badge: null },
  { id: 'messages', label: 'Messages', icon: '💬', badge: null },
  { id: 'newsletter', label: 'Newsletter', icon: '📧', badge: null },
  { id: 'users', label: 'Users', icon: '👥', badge: null },
])

const currentPageTitle = computed(() => {
  return navItems.value.find(n => n.id === activeTab.value)?.label || 'Dashboard'
})

// ===== DATA =====
const blogPosts = ref<any[]>([])
const contacts = ref<any[]>([])
const subscribers = ref<any[]>([])
const users = ref<any[]>([])
const blogLoading = ref(false)

// Overview stats
const overviewStats = computed(() => [
  { icon: '📝', label: 'Blog Posts', value: blogPosts.value.length },
  { icon: '📧', label: 'Subscribers', value: subscribers.value.filter(s => s.isActive).length },
  { icon: '💬', label: 'Messages', value: contacts.value.length },
  { icon: '👥', label: 'Users', value: users.value.length },
])

const newsletterStats = computed(() => ({
  active: subscribers.value.filter(s => s.isActive).length,
  total: subscribers.value.length
}))

// ===== FILTERS =====
const blogFilter = ref('')
const messageFilter = ref('')
const subscriberFilter = ref('')
const userSearch = ref('')
const userRoleFilter = ref('')

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
      u.firstName?.toLowerCase().includes(q) ||
      u.lastName?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q)
    )
  }
  return result
})

// ===== BLOG FORM =====
const showBlogForm = ref(false)
const editingPost = ref<any>(null)
const blogForm = reactive({
  title: '',
  excerpt: '',
  content: '',
  category: 'General',
  author: 'DPH Admin',
  coverImage: '',
  tagsInput: '',
  isPublished: false
})

const resetBlogForm = () => {
  Object.assign(blogForm, {
    title: '', excerpt: '', content: '', category: 'General',
    author: 'DPH Admin', coverImage: '', tagsInput: '', isPublished: false
  })
}

const editPost = (post: any) => {
  editingPost.value = post
  Object.assign(blogForm, {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    author: post.author,
    coverImage: post.coverImage || '',
    tagsInput: (post.tags || []).join(', '),
    isPublished: post.isPublished
  })
  showBlogForm.value = true
}

const saveBlogPost = async () => {
  if (!blogForm.title || !blogForm.content || !blogForm.excerpt) {
    alert('Please fill in title, excerpt and content')
    return
  }
  blogLoading.value = true
  try {
    const payload = {
      ...blogForm,
      tags: blogForm.tagsInput.split(',').map(t => t.trim()).filter(Boolean)
    }
    if (editingPost.value) {
      const res = await api.put(`/api/blog/${editingPost.value._id}`, payload)
      const idx = blogPosts.value.findIndex(p => p._id === editingPost.value._id)
      if (idx !== -1) blogPosts.value[idx] = res.data.data
    } else {
      const res = await api.post('/api/blog', payload)
      blogPosts.value.unshift(res.data.data)
    }
    showBlogForm.value = false
    resetBlogForm()
  } catch (err: any) {
    alert(err.response?.data?.error || 'Failed to save post')
  } finally {
    blogLoading.value = false
  }
}

const togglePublish = async (post: any) => {
  try {
    const res = await api.put(`/api/blog/${post._id}`, { isPublished: !post.isPublished })
    const idx = blogPosts.value.findIndex(p => p._id === post._id)
    if (idx !== -1) blogPosts.value[idx] = res.data.data
  } catch (err) {
    alert('Failed to update post')
  }
}

const deletePost = async (id: string) => {
  if (!confirm('Delete this post? This cannot be undone.')) return
  try {
    await api.delete(`/api/blog/${id}`)
    blogPosts.value = blogPosts.value.filter(p => p._id !== id)
  } catch (err) {
    alert('Failed to delete post')
  }
}

// ===== MESSAGES =====
const selectedMessage = ref<any>(null)

const updateStatus = async (id: string, status: string) => {
  try {
    await api.put(`/api/contacts/${id}/status`, { status })
    const idx = contacts.value.findIndex(c => c._id === id)
    if (idx !== -1) contacts.value[idx].status = status
  } catch (err) {}
}

// ===== USERS =====
const updateUserRole = async (id: string, role: string) => {
  try {
    await api.patch(`/api/admin/users/${id}/role`, { role })
    const idx = users.value.findIndex(u => u._id === id)
    if (idx !== -1) users.value[idx].role = role
  } catch (err) {
    alert('Failed to update role')
  }
}

const deleteUser = async (id: string) => {
  if (!confirm('Delete this user?')) return
  try {
    await api.delete(`/api/admin/users/${id}`)
    users.value = users.value.filter(u => u._id !== id)
  } catch (err) {
    alert('Failed to delete user')
  }
}

// ===== NEWSLETTER =====
const deleteSubscriber = async (id: string) => {
  if (!confirm('Remove this subscriber?')) return
  try {
    await api.delete(`/api/newsletter/${id}`)
    subscribers.value = subscribers.value.filter(s => s._id !== id)
  } catch (err) {
    alert('Failed to remove subscriber')
  }
}

// ===== UTILS =====
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  })
}

const handleLogout = async () => {
  await logout()
  router.push('/login')
}

// ===== FETCH ALL DATA =====
const fetchAll = async () => {
  try {
    const [blogRes, contactRes, subRes, usersRes] = await Promise.allSettled([
      api.get('/api/blog'),
      api.get('/api/contacts'),
      api.get('/api/newsletter/subscribers'),
      api.get('/api/admin/users')
    ])
    if (blogRes.status === 'fulfilled') blogPosts.value = blogRes.value.data.data
    if (contactRes.status === 'fulfilled') contacts.value = contactRes.value.data.data
    if (subRes.status === 'fulfilled') subscribers.value = subRes.value.data.data
    if (usersRes.status === 'fulfilled') users.value = usersRes.value.data.data

    // Update message badge
    const unread = contacts.value.filter(c => c.status === 'pending').length
    const msgNav = navItems.value.find(n => n.id === 'messages')
    if (msgNav && unread > 0) msgNav.badge = unread
  } catch (err) {
    console.error('Failed to fetch data', err)
  }
}

onMounted(fetchAll)
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.admin-shell {
  display: flex;
  height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background: #0d1117;
  color: #e6edf3;
  overflow: hidden;
}

/* ===== SIDEBAR ===== */
.sidebar {
  width: 240px;
  min-width: 240px;
  background: #161b22;
  border-right: 1px solid #21262d;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed { width: 64px; min-width: 64px; }
.sidebar.collapsed .brand-name,
.sidebar.collapsed .nav-label,
.sidebar.collapsed .nav-badge { display: none; }

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 16px;
  border-bottom: 1px solid #21262d;
}

.brand-logo {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #0ea371, #0d7a55);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 13px; color: white;
  flex-shrink: 0;
}

.brand-name {
  font-weight: 600; font-size: 14px; color: #e6edf3;
  white-space: nowrap; flex: 1;
}

.collapse-btn {
  background: none; border: none; color: #8b949e;
  cursor: pointer; padding: 4px; border-radius: 4px; font-size: 12px;
}
.collapse-btn:hover { color: #e6edf3; background: #21262d; }

.sidebar-nav {
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  border: none;
  color: #8b949e;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  width: 100%;
  text-align: left;
}

.nav-item:hover { background: #21262d; color: #e6edf3; }
.nav-item.active { background: rgba(14, 163, 113, 0.15); color: #0ea371; }
.nav-icon { font-size: 16px; flex-shrink: 0; width: 20px; text-align: center; }

.nav-badge {
  margin-left: auto;
  background: #da3633;
  color: white;
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 11px;
  font-weight: 600;
}

.sidebar-footer {
  padding: 8px;
  border-top: 1px solid #21262d;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logout-btn:hover { background: rgba(218, 54, 51, 0.15); color: #da3633; }

/* ===== MAIN ===== */
.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #161b22;
  border-bottom: 1px solid #21262d;
}

.page-title { font-size: 20px; font-weight: 700; color: #e6edf3; }
.page-subtitle { font-size: 12px; color: #8b949e; display: block; margin-top: 2px; }

.admin-badge {
  display: flex; align-items: center; gap: 10px;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 6px 14px 6px 6px;
}

.admin-avatar {
  width: 28px; height: 28px;
  background: linear-gradient(135deg, #0ea371, #0d7a55);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: white;
}

.admin-name { font-size: 13px; font-weight: 600; color: #e6edf3; }

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

/* ===== STATS ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: border-color 0.2s;
}

.stat-card:hover { border-color: #0ea371; }
.stat-icon { font-size: 28px; }
.stat-number { font-size: 28px; font-weight: 700; color: #e6edf3; font-family: 'DM Mono', monospace; }
.stat-label { font-size: 12px; color: #8b949e; margin-top: 2px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }

/* ===== OVERVIEW ===== */
.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.overview-card {
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  padding: 20px;
}

.card-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 16px;
}

.card-header h3 { font-size: 15px; font-weight: 600; color: #e6edf3; }
.btn-link { background: none; border: none; color: #0ea371; cursor: pointer; font-size: 13px; font-family: 'DM Sans', sans-serif; }
.btn-link:hover { text-decoration: underline; }

.mini-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #21262d;
}
.mini-item:last-child { border-bottom: none; }
.mini-item-info { display: flex; flex-direction: column; gap: 2px; }
.mini-title { font-size: 13px; font-weight: 500; color: #e6edf3; }
.mini-meta { font-size: 11px; color: #8b949e; }

/* ===== TOOLBAR ===== */
.tab-toolbar {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 20px; flex-wrap: wrap;
}

.filter-select, .search-input {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #e6edf3;
  padding: 8px 12px;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  outline: none;
}

.filter-select:focus, .search-input:focus { border-color: #0ea371; }
.search-input { width: 250px; }

.count-badge {
  background: #21262d; border: 1px solid #30363d;
  border-radius: 6px; padding: 4px 10px;
  font-size: 12px; color: #8b949e;
}

.newsletter-stats { display: flex; gap: 12px; }
.mini-stat { background: #21262d; border-radius: 8px; padding: 8px 16px; text-align: center; }
.mini-stat-num { display: block; font-size: 20px; font-weight: 700; color: #0ea371; font-family: 'DM Mono', monospace; }
.mini-stat-label { font-size: 11px; color: #8b949e; text-transform: uppercase; }

/* ===== TABLE ===== */
.data-table {
  background: #161b22;
  border: 1px solid #21262d;
  border-radius: 12px;
  overflow: hidden;
}

table { width: 100%; border-collapse: collapse; }

th {
  background: #0d1117;
  padding: 12px 16px;
  text-align: left;
  font-size: 11px; font-weight: 600;
  color: #8b949e;
  text-transform: uppercase; letter-spacing: 0.5px;
  border-bottom: 1px solid #21262d;
}

td {
  padding: 12px 16px;
  font-size: 13px; color: #c9d1d9;
  border-bottom: 1px solid #21262d;
  vertical-align: middle;
}

tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(255,255,255,0.02); }
tr.unread td { background: rgba(14, 163, 113, 0.04); }

.title-cell { max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.actions-cell { display: flex; gap: 6px; align-items: center; }

/* ===== BUTTONS ===== */
.btn-primary {
  background: linear-gradient(135deg, #0ea371, #0d7a55);
  color: white; border: none; border-radius: 8px;
  padding: 9px 18px; font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: 'DM Sans', sans-serif;
  transition: all 0.2s; text-decoration: none;
  display: inline-flex; align-items: center;
}
.btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.btn-secondary {
  background: #21262d; color: #e6edf3;
  border: 1px solid #30363d; border-radius: 8px;
  padding: 9px 18px; font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.2s;
}
.btn-secondary:hover { border-color: #8b949e; }

.btn-icon {
  background: #21262d; border: 1px solid #30363d;
  border-radius: 6px; padding: 5px 8px;
  cursor: pointer; font-size: 13px; transition: all 0.2s;
  text-decoration: none; display: inline-flex;
}
.btn-icon:hover { border-color: #0ea371; background: rgba(14, 163, 113, 0.1); }
.btn-icon.danger:hover { border-color: #da3633; background: rgba(218, 54, 51, 0.1); }

/* ===== STATUS PILLS ===== */
.status-pill {
  display: inline-block; padding: 3px 8px; border-radius: 20px;
  font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px;
}
.status-pill.published { background: rgba(14,163,113,0.15); color: #0ea371; border: 1px solid rgba(14,163,113,0.3); }
.status-pill.draft { background: rgba(139,148,158,0.15); color: #8b949e; border: 1px solid rgba(139,148,158,0.3); }
.status-pill.pending { background: rgba(255,193,7,0.15); color: #ffc107; border: 1px solid rgba(255,193,7,0.3); }
.status-pill.read { background: rgba(14,163,113,0.1); color: #0ea371; border: 1px solid rgba(14,163,113,0.2); }
.status-pill.replied { background: rgba(88,166,255,0.15); color: #58a6ff; border: 1px solid rgba(88,166,255,0.3); }
.status-pill.archived { background: rgba(139,148,158,0.1); color: #8b949e; border: 1px solid rgba(139,148,158,0.2); }

.category-tag {
  background: rgba(88,166,255,0.1); color: #58a6ff;
  border: 1px solid rgba(88,166,255,0.2);
  border-radius: 4px; padding: 2px 8px;
  font-size: 11px; font-weight: 500;
}

.role-select {
  background: #21262d; border: 1px solid #30363d;
  border-radius: 6px; color: #e6edf3;
  padding: 4px 8px; font-size: 12px;
  font-family: 'DM Sans', sans-serif; cursor: pointer; outline: none;
}
.role-select:focus { border-color: #0ea371; }

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
}

.modal-box {
  background: #161b22; border: 1px solid #30363d;
  border-radius: 16px; width: 100%;
  max-width: 560px; max-height: 90vh; overflow-y: auto;
}
.modal-box.large { max-width: 800px; }

.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px; border-bottom: 1px solid #21262d;
}
.modal-header h3 { font-size: 16px; font-weight: 700; color: #e6edf3; }
.modal-close {
  background: none; border: none; color: #8b949e;
  cursor: pointer; font-size: 18px; padding: 4px; border-radius: 4px;
}
.modal-close:hover { color: #e6edf3; background: #21262d; }

.form-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px; padding: 20px 24px;
}
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.full { grid-column: 1 / -1; }
.form-group label { font-size: 12px; font-weight: 600; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; }

.form-input {
  background: #0d1117; border: 1px solid #30363d;
  border-radius: 8px; color: #e6edf3;
  padding: 10px 12px; font-size: 13px;
  font-family: 'DM Sans', sans-serif; outline: none;
  transition: border-color 0.2s; resize: vertical;
}
.form-input:focus { border-color: #0ea371; }
.content-editor { font-family: 'DM Mono', monospace; font-size: 13px; min-height: 200px; }

.checkbox-label {
  display: flex; align-items: center; gap: 8px; cursor: pointer;
  font-size: 13px !important; color: #e6edf3 !important;
  text-transform: none !important; letter-spacing: 0 !important;
}
.checkbox-label input { width: 16px; height: 16px; accent-color: #0ea371; cursor: pointer; }

.modal-footer {
  display: flex; gap: 10px; justify-content: flex-end;
  padding: 16px 24px; border-top: 1px solid #21262d;
}

.message-detail { padding: 20px 24px; }
.message-meta-row {
  display: flex; gap: 24px; flex-wrap: wrap;
  background: #0d1117; border-radius: 8px;
  padding: 12px 16px; margin-bottom: 16px;
  font-size: 13px; color: #8b949e;
}
.message-meta-row strong { color: #e6edf3; }
.message-body {
  background: #0d1117; border-radius: 8px;
  padding: 16px; font-size: 14px; line-height: 1.7;
  color: #c9d1d9; white-space: pre-wrap;
}

/* ===== EMPTY STATES ===== */
.empty-state {
  display: flex; flex-direction: column; align-items: center;
  gap: 8px; padding: 20px; color: #8b949e; font-size: 13px;
}
.empty-state.large { padding: 60px 20px; }
.empty-state span { font-size: 32px; }

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #484f58; }

@media (max-width: 768px) {
  .sidebar { width: 64px; min-width: 64px; }
  .brand-name, .nav-label, .nav-badge { display: none; }
  .overview-grid { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
}
</style>