import React, { useMemo, useState } from "react";
import {
  repositoryCatalog,
  repositoryGroups,
} from "../../data/repositoryCatalog";

const statusClass = (status) => {
  if (status.includes("Flagship") || status.includes("Canonical")) {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";
  }

  if (status.includes("archive") || status.includes("Empty")) {
    return "border-amber-400/30 bg-amber-400/10 text-amber-200";
  }

  if (status.includes("Private")) {
    return "border-slate-400/30 bg-slate-400/10 text-slate-200";
  }

  return "border-purple-400/30 bg-purple-400/10 text-purple-200";
};

const RepositoryCatalog = () => {
  const [activeGroup, setActiveGroup] = useState("All");
  const [query, setQuery] = useState("");

  const filteredRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return repositoryCatalog.filter((repository) => {
      const matchesGroup =
        activeGroup === "All" || repository.group === activeGroup;
      const matchesQuery =
        !normalizedQuery ||
        repository.name.toLowerCase().includes(normalizedQuery) ||
        repository.summary.toLowerCase().includes(normalizedQuery) ||
        repository.status.toLowerCase().includes(normalizedQuery);

      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  const publicCount = repositoryCatalog.filter(
    (repository) => repository.visibility === "Public",
  ).length;
  const privateCount = repositoryCatalog.length - publicCount;
  const archiveCount = repositoryCatalog.filter(
    (repository) =>
      repository.status.includes("archive") ||
      repository.status.includes("Empty") ||
      repository.status.includes("Duplicate"),
  ).length;

  return (
    <section
      id="repositories"
      className="relative px-[7vw] py-24 font-sans lg:px-[14vw]"
    >
      <div className="mb-10 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
          Complete work inventory
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white">
          ALL 54 REPOSITORIES
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
          This catalog separates real systems, private company work, coursework,
          experiments, duplicate repositories and empty archive candidates. A
          repository is not labeled as live unless its public deployment is
          independently verified.
        </p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-3xl font-bold text-white">
            {repositoryCatalog.length}
          </p>
          <p className="mt-1 text-sm text-gray-400">Repositories inventoried</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-3xl font-bold text-white">
            {publicCount} / {privateCount}
          </p>
          <p className="mt-1 text-sm text-gray-400">Public / private sources</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-3xl font-bold text-white">{archiveCount}</p>
          <p className="mt-1 text-sm text-gray-400">
            Empty, duplicate or archive candidates
          </p>
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <label className="block">
          <span className="sr-only">Search repositories</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search repository, system or status"
            className="w-full rounded-xl border border-white/15 bg-[#0d0c1a] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400"
          />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {repositoryGroups.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeGroup === group
                  ? "border-purple-400 bg-purple-500 text-white"
                  : "border-white/15 bg-white/5 text-gray-300 hover:border-white/30"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0c1a]">
        <div className="hidden grid-cols-[1.1fr_1fr_0.55fr_0.8fr] gap-4 border-b border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 md:grid">
          <span>Repository</span>
          <span>Project group</span>
          <span>Access</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-white/10">
          {filteredRepositories.map((repository) => (
            <article
              key={repository.name}
              className="grid gap-4 px-5 py-5 transition hover:bg-white/[0.03] md:grid-cols-[1.1fr_1fr_0.55fr_0.8fr] md:items-start"
            >
              <div className="min-w-0">
                {repository.url ? (
                  <a
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-semibold text-white underline decoration-white/20 underline-offset-4 transition hover:text-purple-300"
                  >
                    {repository.name}
                  </a>
                ) : (
                  <p className="break-all font-semibold text-white">
                    {repository.name}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-gray-400 md:hidden">
                  {repository.summary}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-200">
                  {repository.group}
                </p>
                <p className="mt-2 hidden text-sm leading-relaxed text-gray-400 md:block">
                  {repository.summary}
                </p>
              </div>

              <div>
                <span
                  className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
                    repository.visibility === "Public"
                      ? "border-sky-400/30 bg-sky-400/10 text-sky-200"
                      : "border-slate-400/30 bg-slate-400/10 text-slate-200"
                  }`}
                >
                  {repository.visibility}
                </span>
              </div>

              <div>
                <span
                  className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass(
                    repository.status,
                  )}`}
                >
                  {repository.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredRepositories.length === 0 && (
          <p className="px-5 py-12 text-center text-gray-400">
            No repositories match the current filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default RepositoryCatalog;
