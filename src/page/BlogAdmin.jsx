import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import blogsData from '../data/blogs.json';

const BlogAdmin = () => {
  const [posts, setPosts] = useState(blogsData);
  const [editingPost, setEditingPost] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Load data from imported JSON
    setPosts(blogsData);
  }, []);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleEdit = (post) => {
    setEditingPost({ ...post });
    setShowAddForm(false);
  };

  const handleAdd = () => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const dateFull = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    setEditingPost({
      slug: '',
      title: '',
      category: 'AI/ML',
      date: dateStr,
      dateFull: dateFull,
      emoji: '📝',
      image: 'python',
      excerpt: '',
      sections: [],
      content: []
    });
    setShowAddForm(true);
  };

  const handleSave = () => {
    if (!editingPost.slug || !editingPost.title) {
      showNotification('Slug and title are required!');
      return;
    }

    if (showAddForm) {
      // Add new post
      setPosts([...posts, editingPost]);
      showNotification('Post added! Remember to download and replace the JSON file.');
    } else {
      // Update existing post
      setPosts(posts.map(p => p.slug === editingPost.slug ? editingPost : p));
      showNotification('Post updated! Remember to download and replace the JSON file.');
    }
    setEditingPost(null);
    setShowAddForm(false);
  };

  const handleDelete = (slug) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.slug !== slug));
      showNotification('Post deleted! Remember to download and replace the JSON file.');
    }
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blogs.json';
    link.click();
    URL.revokeObjectURL(url);
    showNotification('JSON file downloaded! Replace src/data/blogs.json with this file.');
  };

  const addSection = () => {
    setEditingPost({
      ...editingPost,
      sections: [...(editingPost.sections || []), {
        heading: '',
        paragraphs: [],
        bullets: [],
        tailParagraphs: [],
        codeBlocks: []
      }]
    });
  };

  const updateSection = (index, field, value) => {
    const newSections = [...editingPost.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const addParagraph = (sectionIndex) => {
    const newSections = [...editingPost.sections];
    if (!newSections[sectionIndex].paragraphs) {
      newSections[sectionIndex].paragraphs = [];
    }
    newSections[sectionIndex].paragraphs.push('');
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const updateParagraph = (sectionIndex, paraIndex, value) => {
    const newSections = [...editingPost.sections];
    newSections[sectionIndex].paragraphs[paraIndex] = value;
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const addBullet = (sectionIndex) => {
    const newSections = [...editingPost.sections];
    if (!newSections[sectionIndex].bullets) {
      newSections[sectionIndex].bullets = [];
    }
    newSections[sectionIndex].bullets.push('');
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const updateBullet = (sectionIndex, bulletIndex, value) => {
    const newSections = [...editingPost.sections];
    newSections[sectionIndex].bullets[bulletIndex] = value;
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const addCodeBlock = (sectionIndex) => {
    const newSections = [...editingPost.sections];
    if (!newSections[sectionIndex].codeBlocks) {
      newSections[sectionIndex].codeBlocks = [];
    }
    newSections[sectionIndex].codeBlocks.push({
      title: '',
      language: 'python',
      code: ''
    });
    setEditingPost({ ...editingPost, sections: newSections });
  };

  const updateCodeBlock = (sectionIndex, blockIndex, field, value) => {
    const newSections = [...editingPost.sections];
    newSections[sectionIndex].codeBlocks[blockIndex][field] = value;
    setEditingPost({ ...editingPost, sections: newSections });
  };

  if (editingPost) {
    return (
      <>
        <Helmet>
          <title>Edit Blog Post | Admin</title>
        </Helmet>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {showAddForm ? 'Add New Blog Post' : 'Edit Blog Post'}
                </h1>
                <button
                  onClick={() => { setEditingPost(null); setShowAddForm(false); }}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                  <input
                    type="text"
                    value={editingPost.slug}
                    onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="my-blog-post-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option>AI/ML</option>
                      <option>Agentic AI</option>
                      <option>React</option>
                      <option>Analytics</option>
                      <option>DevOps</option>
                      <option>Security</option>
                      <option>Innovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date (Display: Month Year)</label>
                    <input
                      type="text"
                      value={editingPost.date}
                      onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Nov 2025"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Date (YYYY-MM-DD) - Used for sorting</label>
                  <input
                    type="date"
                    value={editingPost.dateFull || ''}
                    onChange={(e) => {
                      const dateFull = e.target.value;
                      // Auto-update display date if not manually set
                      if (dateFull) {
                        const dateObj = new Date(dateFull);
                        const displayDate = dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                        setEditingPost({ 
                          ...editingPost, 
                          dateFull: dateFull,
                          date: editingPost.date || displayDate
                        });
                      } else {
                        setEditingPost({ ...editingPost, dateFull: dateFull });
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <p className="text-xs text-gray-500 mt-1">This date is used for sorting. Latest posts appear first.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emoji</label>
                    <input
                      type="text"
                      value={editingPost.emoji}
                      onChange={(e) => setEditingPost({ ...editingPost, emoji: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image (URL or Local Asset)</label>
                    <input
                      type="text"
                      value={editingPost.image || ''}
                      onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="https://images.unsplash.com/... or python/react/aws"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter a full image URL (e.g., Unsplash) or use local assets: python, react, aws, gcp, startup, hosting
                    </p>
                    {editingPost.image && editingPost.image.startsWith('http') && (
                      <div className="mt-2">
                        <img 
                          src={editingPost.image} 
                          alt="Preview" 
                          className="w-full h-32 object-cover rounded border border-gray-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows="3"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-medium text-gray-700">Sections</label>
                    <button
                      onClick={addSection}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      + Add Section
                    </button>
                  </div>

                  {editingPost.sections?.map((section, sIdx) => (
                    <div key={sIdx} className="border border-gray-300 rounded-lg p-4 mb-4">
                      <input
                        type="text"
                        value={section.heading || ''}
                        onChange={(e) => updateSection(sIdx, 'heading', e.target.value)}
                        placeholder="Section Heading"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 font-bold"
                      />

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-700">Paragraphs</label>
                          <button
                            onClick={() => addParagraph(sIdx)}
                            className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            + Add
                          </button>
                        </div>
                        {section.paragraphs?.map((para, pIdx) => (
                          <textarea
                            key={pIdx}
                            value={para}
                            onChange={(e) => updateParagraph(sIdx, pIdx, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
                            rows="2"
                          />
                        ))}
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-700">Bullets</label>
                          <button
                            onClick={() => addBullet(sIdx)}
                            className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            + Add
                          </button>
                        </div>
                        {section.bullets?.map((bullet, bIdx) => (
                          <input
                            key={bIdx}
                            type="text"
                            value={bullet}
                            onChange={(e) => updateBullet(sIdx, bIdx, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
                            placeholder="Bullet point"
                          />
                        ))}
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-700">Code Blocks</label>
                          <button
                            onClick={() => addCodeBlock(sIdx)}
                            className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            + Add
                          </button>
                        </div>
                        {section.codeBlocks?.map((block, cbIdx) => (
                          <div key={cbIdx} className="border border-gray-200 rounded p-3 mb-2">
                            <input
                              type="text"
                              value={block.title || ''}
                              onChange={(e) => updateCodeBlock(sIdx, cbIdx, 'title', e.target.value)}
                              placeholder="Code Block Title"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
                            />
                            <input
                              type="text"
                              value={block.language || ''}
                              onChange={(e) => updateCodeBlock(sIdx, cbIdx, 'language', e.target.value)}
                              placeholder="Language (e.g., python)"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
                            />
                            <textarea
                              value={block.code || ''}
                              onChange={(e) => updateCodeBlock(sIdx, cbIdx, 'code', e.target.value)}
                              placeholder="Code"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-sm"
                              rows="10"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 font-semibold"
                  >
                    Save Post
                  </button>
                  <button
                    onClick={() => { setEditingPost(null); setShowAddForm(false); }}
                    className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog Admin | Escose Technologies</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Blog Posts Admin</h1>
              <div className="flex gap-4">
                <button
                  onClick={handleAdd}
                  className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
                >
                  + Add New Post
                </button>
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 font-semibold"
                >
                  Download JSON
                </button>
              </div>
            </div>

            {notification && (
              <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                {notification}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.slug} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.slug}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(post)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> After making changes, click "Download JSON" to get the updated file. 
                Replace <code className="bg-yellow-100 px-1 rounded">src/data/blogs.json</code> with the downloaded file to apply changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAdmin;

