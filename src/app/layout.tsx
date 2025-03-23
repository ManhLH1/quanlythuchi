import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import Link from "next/link";
import { AuthButtons } from './components/AuthButtons';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quản Lý Thu Chi",
  description: "Ứng dụng quản lý thu chi cá nhân",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Navigation */}
            <nav className="glass-card fixed top-0 left-0 right-0 z-50">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                  <Link href="/" className="text-xl font-bold gradient-text">
                    Quản Lý Thu Chi
                  </Link>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/transactions"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Giao Dịch
                    </Link>
                    <Link
                      href="/orders"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Đơn Hàng
                    </Link>
                    <Link
                      href="/reports"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Báo Cáo
                    </Link>
                    <AuthButtons />
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">{children}</main>

            {/* Footer */}
            <footer className="glass-card mt-auto">
              <div className="container mx-auto px-4 py-6">
                <p className="text-center text-gray-600">
                  © 2024 Quản Lý Thu Chi. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
