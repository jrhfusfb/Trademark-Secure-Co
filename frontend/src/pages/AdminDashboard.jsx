import React, { useEffect, useState } from 'react';
import { Calendar, Mail, Phone, Tag, Trash2, Shield, RefreshCw, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterService, setFilterService] = useState('All');

  const API_BASE = import.meta.env.VITE_API_URL || '';

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/api/consultations`);
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.data);
      } else {
        setError(data.message || 'Failed to fetch leads.');
      }
    } catch (err) {
      console.error(err);
      setError('Could not connect to the server API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Admin Leads Dashboard | Trademark Secure Co.";
    fetchLeads();
  }, []);

  const filteredLeads = filterService === 'All' 
    ? leads 
    : leads.filter(lead => lead.service === filterService);

  // Extract unique services for dropdown filter
  const services = ['All', ...new Set(leads.map(lead => lead.service))];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-800 py-6 px-8 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-white p-2.5 rounded-xl shadow-lg shadow-yellow-700/20">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                Trademark Secure Co.
              </h1>
              <p className="text-sm text-slate-400">Consultation Leads Management Dashboard</p>
            </div>
          </div>
          <button 
            onClick={fetchLeads} 
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl transition text-sm font-semibold border border-slate-700"
          >
            <RefreshCw className="h-4 w-4" /> Refresh Leads
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Analytics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800 bg-slate-800/40">
            <p className="text-sm font-medium text-slate-400 mb-1">Total Leads</p>
            <p className="text-3xl font-extrabold text-white">{leads.length}</p>
          </div>
          <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800 bg-slate-800/40">
            <p className="text-sm font-medium text-slate-400 mb-1">From Main (index8)</p>
            <p className="text-3xl font-extrabold text-secondary">
              {leads.filter(l => l.pageVersion === 'index8').length}
            </p>
          </div>
          <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800 bg-slate-800/40">
            <p className="text-sm font-medium text-slate-400 mb-1">From V7 (index7)</p>
            <p className="text-3xl font-extrabold text-blue-400">
              {leads.filter(l => l.pageVersion === 'index7').length}
            </p>
          </div>
          <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800 bg-slate-800/40">
            <p className="text-sm font-medium text-slate-400 mb-1">General Queries</p>
            <p className="text-3xl font-extrabold text-green-400">
              {leads.filter(l => l.service === 'General Callback' || l.service === 'Other').length}
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-400 font-medium">Filter by Service:</label>
            <select 
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {services.map(srv => (
                <option key={srv} value={srv}>{srv}</option>
              ))}
            </select>
          </div>
          <div className="text-xs text-slate-400">
            Showing {filteredLeads.length} of {leads.length} leads
          </div>
        </div>

        {/* Leads Table / Content Area */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-16 text-center text-slate-400 space-y-4">
              <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-medium">Loading consultation submissions...</p>
            </div>
          ) : error ? (
            <div className="p-16 text-center text-red-400 space-y-2">
              <div className="text-3xl">⚠️</div>
              <p className="font-bold">Error loading data</p>
              <p className="text-sm text-slate-400">{error}</p>
              <button 
                onClick={fetchLeads}
                className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
              >
                Try Again
              </button>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-16 text-center text-slate-400 space-y-2">
              <div className="text-3xl">📭</div>
              <p className="font-bold">No Leads Found</p>
              <p className="text-sm text-slate-500">Submissions from the consultation forms will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Client Info</th>
                    <th className="py-4 px-6">Service Requested</th>
                    <th className="py-4 px-6">Message / Requirement</th>
                    <th className="py-4 px-6">Source Version</th>
                    <th className="py-4 px-6">Submitted Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-900/30 transition">
                      <td className="py-5 px-6">
                        <div className="font-bold text-white mb-1.5">{lead.name}</div>
                        <div className="space-y-1 text-slate-400 text-xs">
                          <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 hover:text-white transition">
                            <Phone className="h-3 w-3 text-slate-500" /> {lead.phone}
                          </a>
                          <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-white transition">
                            <Mail className="h-3 w-3 text-slate-500" /> {lead.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          lead.service === 'General Callback' 
                            ? 'bg-blue-900/40 text-blue-300 border border-blue-800/50'
                            : 'bg-yellow-900/40 text-yellow-300 border border-yellow-800/50'
                        }`}>
                          <Tag className="h-3 w-3" /> {lead.service}
                        </span>
                      </td>
                      <td className="py-5 px-6 max-w-sm">
                        <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                          {lead.message || <span className="text-slate-600 italic">No message provided</span>}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${
                          lead.pageVersion === 'index8' 
                            ? 'bg-slate-800 text-slate-300 border border-slate-700' 
                            : 'bg-indigo-950 text-indigo-300 border border-indigo-900'
                        }`}>
                          {lead.pageVersion === 'index8' ? 'index8 (Main)' : 'index7 (Alt)'}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-slate-500" />
                          {new Date(lead.createdAt).toLocaleString(undefined, {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
