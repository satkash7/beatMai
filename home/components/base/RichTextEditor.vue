<template>
  <div class="rich-editor border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
    <!-- Toolbar -->
    <div class="editor-toolbar flex flex-wrap items-center gap-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
      <!-- Text format group -->
      <div class="flex items-center gap-0.5 border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <button type="button" @click="exec('undo')" title="Annuler" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a5 5 0 015 5v2M3 10l4-4M3 10l4 4"/></svg>
        </button>
        <button type="button" @click="exec('redo')" title="Rétablir" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10H11a5 5 0 00-5 5v2m15-7l-4-4m4 4l-4 4"/></svg>
        </button>
      </div>

      <!-- Heading select -->
      <div class="border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <select @change="formatBlock($event)" class="text-xs bg-white dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option value="p">Paragraphe</option>
          <option value="h1">Titre 1</option>
          <option value="h2">Titre 2</option>
          <option value="h3">Titre 3</option>
          <option value="h4">Titre 4</option>
          <option value="blockquote">Citation</option>
          <option value="pre">Code</option>
        </select>
      </div>

      <!-- Bold, Italic, Underline, Strikethrough -->
      <div class="flex items-center gap-0.5 border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <button type="button" @click="exec('bold')" title="Gras" class="toolbar-btn font-bold">B</button>
        <button type="button" @click="exec('italic')" title="Italique" class="toolbar-btn italic">I</button>
        <button type="button" @click="exec('underline')" title="Souligné" class="toolbar-btn underline">U</button>
        <button type="button" @click="exec('strikeThrough')" title="Barré" class="toolbar-btn line-through">S</button>
      </div>

      <!-- Colors -->
      <div class="flex items-center gap-0.5 border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <label title="Couleur du texte" class="toolbar-btn relative cursor-pointer">
          <span class="text-xs font-bold">A</span>
          <input type="color" @input="applyColor('foreColor', $event)" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" value="#000000" />
          <span class="absolute bottom-0 left-1 right-1 h-0.5 bg-red-500 rounded"></span>
        </label>
        <label title="Couleur de fond" class="toolbar-btn relative cursor-pointer">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/></svg>
          <input type="color" @input="applyColor('hiliteColor', $event)" class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" value="#ffff00" />
        </label>
      </div>

      <!-- Alignment -->
      <div class="flex items-center gap-0.5 border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <button type="button" @click="exec('justifyLeft')" title="Aligner à gauche" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 6h18M3 12h12M3 18h18"/></svg>
        </button>
        <button type="button" @click="exec('justifyCenter')" title="Centrer" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 6h18M6 12h12M3 18h18"/></svg>
        </button>
        <button type="button" @click="exec('justifyRight')" title="Aligner à droite" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 6h18M9 12h12M3 18h18"/></svg>
        </button>
      </div>

      <!-- Lists -->
      <div class="flex items-center gap-0.5 border-r border-gray-300 dark:border-gray-500 pr-2 mr-1">
        <button type="button" @click="exec('insertUnorderedList')" title="Liste à puces" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
        </button>
        <button type="button" @click="exec('insertOrderedList')" title="Liste numérotée" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M9 6h11M9 12h11M9 18h11"/><text x="2" y="8" font-size="7" fill="currentColor" stroke="none">1</text><text x="2" y="14" font-size="7" fill="currentColor" stroke="none">2</text><text x="2" y="20" font-size="7" fill="currentColor" stroke="none">3</text></svg>
        </button>
        <button type="button" @click="exec('indent')" title="Augmenter le retrait" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M13 6h8M13 12h8M3 18h18M3 6l4 3-4 3"/></svg>
        </button>
        <button type="button" @click="exec('outdent')" title="Diminuer le retrait" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M13 6h8M13 12h8M3 18h18M7 6L3 9l4 3"/></svg>
        </button>
      </div>

      <!-- Link + Image + HR -->
      <div class="flex items-center gap-0.5">
        <button type="button" @click="insertLink" title="Insérer un lien" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
        </button>
        <button type="button" @click="exec('removeFormat')" title="Supprimer le formatage" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"/></svg>
        </button>
        <button type="button" @click="exec('insertHorizontalRule')" title="Ligne horizontale" class="toolbar-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 12h18"/></svg>
        </button>
      </div>
    </div>

    <!-- Editable Area -->
    <div
      ref="editorContent"
      contenteditable="true"
      class="editor-content px-4 py-3 min-h-[300px] max-h-[600px] overflow-y-auto focus:outline-none prose prose-sm max-w-none dark:prose-invert text-gray-900 dark:text-gray-100"
      @input="onInput"
      @paste="onPaste"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'RichTextEditor',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      internalUpdate: false
    }
  },
  watch: {
    modelValue(newVal) {
      if (this.internalUpdate) return;
      if (this.$refs.editorContent && this.$refs.editorContent.innerHTML !== newVal) {
        this.$refs.editorContent.innerHTML = newVal || '';
      }
    }
  },
  mounted() {
    if (this.$refs.editorContent) {
      this.$refs.editorContent.innerHTML = this.modelValue || '';
    }
  },
  methods: {
    exec(command, value = null) {
      document.execCommand(command, false, value);
      this.$refs.editorContent.focus();
      this.emitUpdate();
    },
    formatBlock(event) {
      const tag = event.target.value;
      document.execCommand('formatBlock', false, `<${tag}>`);
      this.$refs.editorContent.focus();
      this.emitUpdate();
    },
    applyColor(command, event) {
      document.execCommand(command, false, event.target.value);
      this.$refs.editorContent.focus();
      this.emitUpdate();
    },
    insertLink() {
      const url = prompt('Entrez l\'URL du lien :');
      if (url) {
        document.execCommand('createLink', false, url);
        this.emitUpdate();
      }
    },
    onInput() {
      this.emitUpdate();
    },
    onPaste(e) {
      e.preventDefault();
      const text = e.clipboardData.getData('text/html') || e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
      this.emitUpdate();
    },
    emitUpdate() {
      this.internalUpdate = true;
      this.$emit('update:modelValue', this.$refs.editorContent.innerHTML);
      this.$nextTick(() => {
        this.internalUpdate = false;
      });
    },
    setContent(html) {
      if (this.$refs.editorContent) {
        this.$refs.editorContent.innerHTML = html || '';
        this.emitUpdate();
      }
    }
  }
}
</script>

<style scoped>
.toolbar-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: #4b5563;
  font-size: 0.875rem;
  transition: background-color 0.15s;
  cursor: pointer;
  border: none;
  background: transparent;
}
.toolbar-btn:hover {
  background-color: #e5e7eb;
}
.toolbar-btn:active {
  background-color: #d1d5db;
}

.editor-content :deep(h1) { font-size: 1.75em; font-weight: 700; margin: 0.5em 0; }
.editor-content :deep(h2) { font-size: 1.5em; font-weight: 600; margin: 0.5em 0; }
.editor-content :deep(h3) { font-size: 1.25em; font-weight: 600; margin: 0.4em 0; }
.editor-content :deep(h4) { font-size: 1.1em; font-weight: 600; margin: 0.4em 0; }
.editor-content :deep(p) { margin: 0.4em 0; }
.editor-content :deep(ul),
.editor-content :deep(ol) { padding-left: 1.5em; margin: 0.4em 0; }
.editor-content :deep(blockquote) {
  border-left: 3px solid #3b82f6;
  padding-left: 1em;
  margin: 0.5em 0;
  color: #6b7280;
  font-style: italic;
}
.editor-content :deep(a) { color: #3b82f6; text-decoration: underline; }
.editor-content :deep(hr) { margin: 1em 0; border-color: #e5e7eb; }
.editor-content :deep(pre) {
  background: #f3f4f6;
  padding: 0.75em;
  border-radius: 0.375rem;
  font-family: monospace;
  font-size: 0.9em;
  overflow-x: auto;
}
.editor-content :deep(img) { max-width: 100%; height: auto; border-radius: 0.375rem; }
</style>
