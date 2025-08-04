import React from "react";
import Footer from "../index";

// components/Footer/index.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components/Footer/index.test.js
// Mocking Button component
jest.mock("../../Button", () => {
  const MockButton = ({ children }) => <button>{children}</button>;
  MockButton.displayName = "MockButton";
  return MockButton;
});

// Mocking Socials component
jest.mock("../../Socials", () => {
  const MockSocials = ({ className }) => (
    <div className={className}>Socials</div>
  );
  MockSocials.displayName = "MockSocials";
  return MockSocials;
});

// Mocking Link component from next/link
jest.mock("next/link", () => {
  const MockLink = ({ children, href }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

// Mocking useTheme hook
// jest.mock("../../hooks/useTheme", () => {
//   return {
//     useTheme: () => ({ theme: 'light' }),
//   };
// });

describe("Footer() Footer method", () => {
  // Happy Path Tests
  describe("Happy Path", () => {
    test("renders contact information correctly", () => {
      render(<Footer />);
      expect(screen.getByText("Tri Huu Bui")).toBeInTheDocument();
      expect(screen.getByText("+84 903687220")).toBeInTheDocument();
      expect(screen.getByText("huutri10a3vvkgmail.com")).toBeInTheDocument();
      expect(screen.getByText("Thu Duc, Ho Chi Minh city")).toBeInTheDocument();
    });

    test("renders social links correctly", () => {
      render(<Footer />);
      expect(
        screen.getByRole("link", { name: /Tri Huu Bui/i })
      ).toHaveAttribute("href", "https://github.com/HuuTri26");
      expect(
        screen.getByRole("link", { name: /Socials/i })
      ).toBeInTheDocument();
    });

    test("renders Google Map iframe correctly", () => {
      render(<Footer />);
      const iframe = screen.getByTitle("Google Maps Location");
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute(
        "src",
        expect.stringContaining("https://www.google.com/maps/embed")
      );
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("handles missing contact information gracefully", () => {
      const originalContactInfo = Footer.contactInfo;
      Footer.contactInfo = {};
      render(<Footer />);
      expect(screen.queryByText("Bùi Hữu Trí")).not.toBeInTheDocument();
      expect(screen.queryByText("+84 123 456 789")).not.toBeInTheDocument();
      expect(
        screen.queryByText("emailcuaban@gmail.com")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Thu Duc, Ho Chi Minh city")
      ).not.toBeInTheDocument();
      Footer.contactInfo = originalContactInfo;
    });

    test("handles missing social links gracefully", () => {
      const originalSocialLinks = Footer.socialLinks;
      Footer.socialLinks = {};
      render(<Footer />);
      expect(
        screen.queryByRole("link", { name: /Tri Huu Bui/i })
      ).not.toBeInTheDocument();
      Footer.socialLinks = originalSocialLinks;
    });
  });
});
