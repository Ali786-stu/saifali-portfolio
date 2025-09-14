import React, { useState, useEffect } from "react";
import Loader from "./Loader";

// ✅ Type for GitHub Repo
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  homepage: string | null;
  private?: boolean;
}

const AllProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [search, setSearch] = useState<string>("");
  const [language, setLanguage] = useState<string>("All");

  // 🔥 Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 6;

  // Track screen size
  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const username = "aligasad";
    const url = `https://api.github.com/users/${username}/repos?per_page=100&type=all`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const sorted = data.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepos(sorted);
        setFilteredRepos(sorted);
      })
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // 🔎 Search + Filter
  useEffect(() => {
    let updated = [...repos];

    if (search.trim() !== "") {
      updated = updated.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (language !== "All") {
      updated = updated.filter((repo) => repo.language === language);
    }

    setFilteredRepos(updated);
    setCurrentPage(1);
  }, [search, language, repos]);

  // ✅ Unique languages
  const languages: string[] = [
    "All",
    ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean))) as string[],
  ];

  // ✅ Pagination calculations
  const totalPages = Math.ceil(filteredRepos.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentRepos = filteredRepos.slice(startIndex, startIndex + perPage);

  // ✅ Helper: get visible page numbers
  const getVisiblePages = () => {
    const maxVisible = isSmall ? 3 : 5;
    const pages: number[] = [];
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  // ✅ Helper: choose live demo link
  const getLiveLink = (repo: Repo): string | null => {
    if (repo.homepage && repo.homepage.trim() !== "") {
      return repo.homepage; // Vercel/Netlify ya manually added
    }
    // Agar GitHub Pages ho sakta hai to try karein
    return `https://aligasad.github.io/${repo.name}`;
  };

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <p>Error fetching projects: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-10 text-[#3c59eb]">
        My GitHub Projects
      </h2>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full sm:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang, idx) => (
            <option key={idx} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      {currentRepos.length === 0 ? (
        <p className="text-center text-gray-600">No projects found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentRepos.map((repo) => {
            const liveLink = getLiveLink(repo);
            return (
              <div
                key={repo.id}
                className="border rounded-xl p-5 shadow-sm hover:shadow-xl transition bg-blue-50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                  {repo.description && (
                    <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{repo.language || "Unknown"}</span>
                    {/* Star ke aage ye use karna hai abhi sare repo ka value 0 hai isiliye iska use nahi akr raha {repo.stargazers_count} */}
                    <span>⭐ 5</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-400">
                    Updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  {repo.private ? (
                    <span className="flex-1 px-4 py-2 text-center bg-red-500 text-white rounded-lg">
                      Private
                    </span>
                  ) : (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
