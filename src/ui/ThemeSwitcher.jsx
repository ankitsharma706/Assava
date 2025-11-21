import styled from "styled-components";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"; // 🌞 + 🌙 icons

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ThemeSwitcher() {
  const current = localStorage.getItem("assava-theme") || "light";
  const isDark = current === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    localStorage.setItem("assava-theme", next);
    window.location.reload(); // keep old behavior
  };

  return (
    <Btn onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
    </Btn>
  );
}
