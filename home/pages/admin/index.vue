<template>
  <client-only>
    <div class="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <!-- Top Bar -->
      <div class="bg-white dark:bg-dark-card shadow-sm border-b border-gray-200 dark:border-dark-border px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Bienvenue, {{ user.name || user.username }}</p>
          </div>
          <div class="flex items-center space-x-3">
            <button @click="navigateTo('/create?v=blog')" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Nouvelle publication
            </button>
            <button @click="logout" class="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors border border-red-200">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 py-8">
        <!-- Loading -->
        <div v-if="isLoading" class="flex items-center justify-center py-20">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p class="text-gray-500 dark:text-gray-400">Chargement du tableau de bord...</p>
          </div>
        </div>

        <template v-else>
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6 hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Articles</p>
                  <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ stats.articles }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                </div>
              </div>
              <p class="text-xs text-green-600 dark:text-green-400 mt-2">Publiés</p>
            </div>
            <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6 hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Opportunités</p>
                  <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ stats.opportunities }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
              </div>
              <p class="text-xs text-green-600 dark:text-green-400 mt-2">Actives</p>
            </div>
            <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6 hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Commentaires</p>
                  <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ stats.comments }}</p>
                </div>
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                </div>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Total reçus</p>
            </div>
            <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6 hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total publications</p>
                  <p class="text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ stats.total }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Articles + Opportunités</p>
            </div>
          </div>

          <!-- Category Distribution + Quick Actions -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="lg:col-span-2 bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Répartition par catégorie</h3>
              <div class="space-y-3">
                <div v-for="cat in categoryStats" :key="cat.name" class="flex items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400 w-40 truncate">{{ cat.name }}</span>
                  <div class="flex-1 mx-3">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div class="h-3 rounded-full transition-all duration-500" :style="{ width: cat.percentage + '%', backgroundColor: cat.color }"></div>
                    </div>
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 w-8 text-right">{{ cat.count }}</span>
                </div>
                <div v-if="categoryStats.length === 0" class="text-center py-4 text-gray-400">Aucune donnée</div>
              </div>
            </div>
            <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions rapides</h3>
              <div class="space-y-3">
                <button @click="navigateTo('/create?v=blog')" class="w-full flex items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-left">
                  <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Nouvel article</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Créer une publication</p>
                  </div>
                </button>
                <button @click="navigateTo('/')" class="w-full flex items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-left">
                  <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Voir le site</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Accéder à la page d'accueil</p>
                  </div>
                </button>
                <button @click="activeTab = 'comments'; loadAllComments()" class="w-full flex items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-left">
                  <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Commentaires</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Gérer les commentaires</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Tab Navigation + Content -->
          <div class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden">
            <div class="border-b border-gray-200 dark:border-dark-border">
              <nav class="flex -mb-px overflow-x-auto">
                <button @click="activeTab = 'articles'" :class="activeTab === 'articles' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700'" class="px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center whitespace-nowrap">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                  Articles ({{ blogs.length }})
                </button>
                <button @click="activeTab = 'opportunities'" :class="activeTab === 'opportunities' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700'" class="px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center whitespace-nowrap">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  Opportunités ({{ opportunities.length }})
                </button>
                <button @click="activeTab = 'comments'; loadAllComments()" :class="activeTab === 'comments' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700'" class="px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center whitespace-nowrap">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                  Commentaires ({{ stats.comments }})
                </button>
              </nav>
            </div>

            <!-- Search -->
            <div class="p-4 border-b border-gray-100 dark:border-dark-border">
              <div class="relative">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input v-model="searchQuery" type="text" placeholder="Rechercher..." class="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white" />
              </div>
            </div>

            <!-- Articles Tab -->
            <div v-if="activeTab === 'articles'" class="divide-y divide-gray-100 dark:divide-dark-border">
              <div v-if="filteredBlogs.length === 0" class="p-12 text-center">
                <svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <p class="text-gray-500">Aucun article trouvé</p>
                <button @click="navigateTo('/create?v=blog')" class="mt-4 text-sm text-blue-600 hover:text-blue-700">+ Créer un article</button>
              </div>
              <div v-for="blog in filteredBlogs" :key="blog.id" class="p-4 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors flex items-center">
                <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                  <img v-if="blog.imageUrl" :src="blog.imageUrl" :alt="blog.blogTitle" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
                </div>
                <div class="ml-4 flex-1 min-w-0">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white truncate">{{ blog.blogTitle }}</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{{ blog.blogCaption || 'Pas de description' }}</p>
                  <div class="flex items-center mt-2 space-x-3">
                    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" :class="getCategoryColor(blog.blogCategory)">{{ blog.blogCategory || 'Non catégorisé' }}</span>
                    <span class="text-xs text-gray-400">{{ blog.creation_date || formatDate(blog.created_at) }}</span>
                  </div>
                </div>
                <div class="flex items-center space-x-2 ml-4 flex-shrink-0">
                  <button @click="viewItem('blogs', blog.blogRoute)" class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Voir">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                  <button @click="editItem('blog', blog.blogRoute)" class="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Éditer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button @click="deleteItem('blog', blog.id)" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Supprimer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Opportunities Tab -->
            <div v-if="activeTab === 'opportunities'" class="divide-y divide-gray-100 dark:divide-dark-border">
              <div v-if="filteredOpportunities.length === 0" class="p-12 text-center">
                <svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <p class="text-gray-500">Aucune opportunité trouvée</p>
                <button @click="navigateTo('/create?v=blog')" class="mt-4 text-sm text-blue-600 hover:text-blue-700">+ Créer une opportunité</button>
              </div>
              <div v-for="opp in filteredOpportunities" :key="opp.id" class="p-4 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors flex items-center">
                <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                  <img v-if="opp.imageUrl" :src="opp.imageUrl" :alt="opp.blogTitle" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full flex items-center justify-center"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
                </div>
                <div class="ml-4 flex-1 min-w-0">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white truncate">{{ opp.blogTitle }}</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{{ opp.blogCaption || 'Pas de description' }}</p>
                  <div class="flex items-center mt-2 space-x-3">
                    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Opportunité</span>
                    <span class="text-xs text-gray-400">{{ opp.creation_date || formatDate(opp.created_at) }}</span>
                  </div>
                </div>
                <div class="flex items-center space-x-2 ml-4 flex-shrink-0">
                  <button @click="viewItem('opportunities', opp.blogRoute)" class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="Voir">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                  <button @click="editItem('blog', opp.blogRoute)" class="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors" title="Éditer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button @click="deleteItem('blog', opp.id)" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Supprimer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Comments Tab -->
            <div v-if="activeTab === 'comments'" class="divide-y divide-gray-100 dark:divide-dark-border">
              <div v-if="commentsLoading" class="p-12 text-center">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mb-3"></div>
                <p class="text-sm text-gray-500">Chargement des commentaires...</p>
              </div>
              <div v-else-if="filteredComments.length === 0" class="p-12 text-center">
                <svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <p class="text-gray-500">Aucun commentaire trouvé</p>
              </div>
              <div v-for="comment in filteredComments" :key="comment.id" class="p-4 hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors">
                <div class="flex items-start">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-sm font-bold">{{ (comment.commentOwner || 'A').charAt(0).toUpperCase() }}</span>
                  </div>
                  <div class="ml-3 flex-1">
                    <div class="flex items-center justify-between flex-wrap gap-1">
                      <div>
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ comment.commentOwner }}</span>
                        <span class="text-xs text-gray-400 ml-2">{{ comment.creation_date || formatDate(comment.created_at) }}</span>
                      </div>
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">{{ comment.commentType }}</span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ comment.commentData }}</p>
                    <p v-if="comment.postTitle" class="text-xs text-blue-500 mt-1">Sur : {{ comment.postTitle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Delete Confirmation Modal -->
          <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/50" @click="showDeleteModal = false"></div>
            <div class="relative bg-white dark:bg-dark-card rounded-xl shadow-2xl max-w-md w-full p-6">
              <div class="text-center">
                <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Supprimer cette publication ?</h3>
                <p class="text-sm text-gray-500 mb-6">Cette action est irréversible.</p>
                <div class="flex space-x-3 justify-center">
                  <button @click="showDeleteModal = false" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Annuler</button>
                  <button @click="confirmDelete" class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                    <span v-if="deleteLoading" class="flex items-center"><svg class="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Suppression...</span>
                    <span v-else>Supprimer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Toast -->
          <Transition name="toast">
            <div v-if="toast.show" class="fixed bottom-6 right-6 z-50 flex items-center p-4 rounded-xl shadow-lg border" :class="toast.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'">
              <svg v-if="toast.type === 'success'" class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <svg v-else class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
              <span class="text-sm font-medium" :class="toast.type === 'success' ? 'text-green-800' : 'text-red-800'">{{ toast.message }}</span>
            </div>
          </Transition>
        </template>
      </div>
    </div>
  </client-only>
</template>

<script setup>
definePageMeta({ layout: 'user' })
</script>

<script>
export default {
  name: 'admin-dashboard',
  data() {
    return {
      isLoading: true,
      user: {},
      blogs: [],
      opportunities: [],
      allComments: [],
      commentsLoading: false,
      commentsLoaded: false,
      activeTab: 'articles',
      searchQuery: '',
      showDeleteModal: false,
      deleteLoading: false,
      pendingDeleteId: null,
      pendingDeleteCategory: null,
      toast: { show: false, message: '', type: 'success' }
    }
  },
  computed: {
    stats() {
      return {
        articles: this.blogs.length,
        opportunities: this.opportunities.length,
        comments: this.allComments.length,
        total: this.blogs.length + this.opportunities.length
      }
    },
    categoryStats() {
      const allPosts = [...this.blogs, ...this.opportunities]
      const categoryMap = {}
      const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']
      allPosts.forEach(post => {
        const cat = post.blogCategory || 'Non catégorisé'
        categoryMap[cat] = (categoryMap[cat] || 0) + 1
      })
      const total = allPosts.length || 1
      return Object.entries(categoryMap).sort((a, b) => b[1] - a[1]).map(([name, count], i) => ({
        name, count,
        percentage: Math.round((count / total) * 100),
        color: colors[i % colors.length]
      }))
    },
    filteredBlogs() {
      if (!this.searchQuery) return this.blogs
      const q = this.searchQuery.toLowerCase()
      return this.blogs.filter(b => (b.blogTitle || '').toLowerCase().includes(q) || (b.blogCaption || '').toLowerCase().includes(q) || (b.blogCategory || '').toLowerCase().includes(q))
    },
    filteredOpportunities() {
      if (!this.searchQuery) return this.opportunities
      const q = this.searchQuery.toLowerCase()
      return this.opportunities.filter(o => (o.blogTitle || '').toLowerCase().includes(q) || (o.blogCaption || '').toLowerCase().includes(q))
    },
    filteredComments() {
      if (!this.searchQuery) return this.allComments
      const q = this.searchQuery.toLowerCase()
      return this.allComments.filter(c => (c.commentData || '').toLowerCase().includes(q) || (c.commentOwner || '').toLowerCase().includes(q))
    }
  },
  async mounted() {
    if (typeof sessionStorage === 'undefined' || !sessionStorage.getItem('token')) {
      this.$router.push('/u')
      return
    }
    await this.loadDashboardData()
  },
  methods: {
    async loadDashboardData() {
      try {
        const response = await this.$axios.get('/user/mydetails')
        this.user = response.data.user
        this.blogs = response.data.blogs || []
        this.opportunities = response.data.opportunities || []
        this.isLoading = false
        this.loadAllComments()
      } catch (error) {
        console.error('Error loading dashboard:', error)
        this.isLoading = false
      }
    },
    async loadAllComments() {
      if (this.commentsLoaded) return
      this.commentsLoading = true
      try {
        const allPosts = [...this.blogs, ...this.opportunities]
        const commentPromises = allPosts.map(post =>
          this.$axios.get('/comment/getall', { params: { type: 'blog', id: post.id } })
            .then(res => (res.data.comments || []).map(c => ({ ...c, postTitle: post.blogTitle })))
            .catch(() => [])
        )
        const results = await Promise.all(commentPromises)
        this.allComments = results.flat().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        this.commentsLoaded = true
      } catch (error) {
        console.error('Error loading comments:', error)
      } finally {
        this.commentsLoading = false
      }
    },
    navigateTo(path) { this.$router.push(path) },
    viewItem(type, route) { this.$router.push(`/${type}/${route}`) },
    editItem(category, route) { this.$router.push({ path: `/edit?category=${category}&route=${route}` }) },
    deleteItem(category, id) {
      this.pendingDeleteId = id
      this.pendingDeleteCategory = category
      this.showDeleteModal = true
    },
    async confirmDelete() {
      this.deleteLoading = true
      try {
        const response = await this.$axios.delete(`/${this.pendingDeleteCategory}/delete/${this.pendingDeleteId}`)
        if (response.data.status_code === 200) {
          this.blogs = this.blogs.filter(b => b.id !== this.pendingDeleteId)
          this.opportunities = this.opportunities.filter(o => o.id !== this.pendingDeleteId)
          this.showToast('Publication supprimée avec succès', 'success')
        } else {
          this.showToast('Échec de la suppression', 'error')
        }
      } catch (error) {
        console.error('Delete failed:', error)
        this.showToast('Erreur lors de la suppression', 'error')
      } finally {
        this.deleteLoading = false
        this.showDeleteModal = false
      }
    },
    showToast(message, type = 'success') {
      this.toast = { show: true, message, type }
      setTimeout(() => { this.toast.show = false }, 4000)
    },
    formatDate(dateStr) {
      if (!dateStr) return ''
      return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    },
    getCategoryColor(category) {
      const colors = { 'Actualité': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', 'Projet': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', 'Evenement': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', 'Autre': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400' }
      return colors[category] || colors['Autre']
    },
    logout() {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('name')
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          localStorage.removeItem('email')
          localStorage.removeItem('name')
        }
        this.$router.push('/u')
      }
    }
  }
}
</script>

<style scoped>
.toast-enter-active { animation: slideIn 0.3s ease-out; }
.toast-leave-active { animation: slideOut 0.3s ease-in; }
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
</style>
