<!-- src/components/Users.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { getUsers, createUser } from '@/api/users'

const users = ref([])
const newUser = ref({ name: '', email: '' })
const message = ref('')

onMounted(async () => {
  const { data } = await getUsers()
  users.value = data
})

const handleCreate = async () => {
  const { data } = await createUser(newUser.value)
  message.value = data.message
}
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>

    <input v-model="newUser.name" placeholder="Name" />
    <input v-model="newUser.email" placeholder="Email" />
    <button @click="handleCreate">Create User</button>
    <p>{{ message }}</p>
  </div>
</template>