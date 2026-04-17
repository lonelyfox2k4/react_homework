import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      // giả lập API
      const success = true;

      if (success) {
        setUsers([
          { id: 1, name: "Sơn" },
          { id: 2, name: "Nam" }
        ]);
      } else {
        setError("Fetch failed ❌");
      }

      setLoading(false);
    }, 1500);
  }, []);

  // ✅ 1. EARLY RETURN (best practice)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User List</h2>

      {/* ✅ 2. && operator */}
      {users.length > 0 && <p>Có {users.length} user</p>}

      {/* ✅ 3. TERNARY */}
      {users.length === 0 ? (
        <p>Không có user nào</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}