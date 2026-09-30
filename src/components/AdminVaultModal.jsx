import React, { useState, useEffect } from 'react';

export default function AdminVaultModal({ isOpen, onClose }) {
  const [passphrase, setPassphrase] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [aiEnabled, setAiEnabled] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchStatus();
    }
  }, [isOpen]);

  const fetchStatus = async () => {
    try {
      const res = await fetch('http://localhost:5050/api/admin/ai-status');
      if (res.ok) {
        const data = await res.json();
        setConfigured(!!data.configured);
        setAiEnabled(!!data.aiEnabled);
      }
    } catch (e) {
      console.error('Failed to query AI status', e);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5050/api/admin/ai-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passphrase,
          apiKey: apiKey.trim() || undefined,
          aiEnabled
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update configuration');
      }

      setStatusMsg('Configuration encrypted and saved securely!');
      setConfigured(data.configured);
      setAiEnabled(data.aiEnabled);
      setApiKey(''); // Wipe raw key from frontend input state
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, padding: '1rem'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '16px', maxWidth: '480px', width: '100%',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', padding: '2rem',
        border: '1px solid #e2e8f0', fontFamily: 'inherit'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>
              🛡️ Admin AI Key Vault
            </h3>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
              SpecKit 001-dynamic-admin-vault · Zero Git Exposure
            </p>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', fontSize: '1.25rem',
            cursor: 'pointer', color: '#94a3b8'
          }}>✕</button>
        </div>

        <div style={{
          background: configured ? '#f0fdf4' : '#fffbeb',
          border: configured ? '1px solid #bbf7d0' : '1px solid #fde68a',
          borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.25rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem'
        }}>
          <span style={{ fontSize: '1.25rem' }}>{configured ? '✅' : '⚠️'}</span>
          <div style={{ fontSize: '0.85rem' }}>
            <strong>Status:</strong> {configured ? 'Vault Encrypted & Active' : 'Not Configured Yet'}
            <div style={{ color: '#64748b', fontSize: '0.75rem' }}>
              AI Generation: {aiEnabled ? '🟢 Enabled' : '🔴 Disabled'}
            </div>
          </div>
        </div>

        {statusMsg && (
          <div style={{ background: '#ecfdf5', color: '#065f46', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem' }}>
            ✓ {statusMsg}
          </div>
        )}
        {errorMsg && (
          <div style={{ background: '#fef2f2', color: '#991b1b', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem' }}>
            ✗ {errorMsg}
          </div>
        )}

        <form onSubmit={handleSave}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
              Admin Passphrase *
            </label>
            <input
              type= password
              required
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              placeholder=Enter admin passphrase
              style={{
                width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px',
                border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
              Gemini API Key {configured ? '(Leave empty to keep existing)' : '*'}
            </label>
            <input
              type=password
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={configured ? '••••••••••••••••••••' : 'Paste API Key (AQ.Ab8RN6...)'}
              style={{
                width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px',
                border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Enable AI Generation</span>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>Toggle off to pause quota consumption</p>
            </div>
            <input
              type=checkbox
              checked={aiEnabled}
              onChange={(e) => setAiEnabled(e.target.checked)}
              style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              type=button
              onClick={onClose}
              style={{
                padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1',
                background: '#f8fafc', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem'
              }}
            >
              Cancel
            </button>
            <button
              type=submit
              disabled={loading}
              style={{
                padding: '0.5rem 1.25rem', borderRadius: '6px', border: 'none',
                background: '#0f766e', color: '#ffffff', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem'
              }}
            >
              {loading ? 'Encrypting...' : 'Save & Encrypt'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
