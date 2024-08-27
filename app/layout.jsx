// These styles apply to every route in the application
//import './globals.css';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ header, main, footer }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>{header}</header>

      {/* Main Content */}
      <main className="flex-grow p-4">{main}</main>

      {/* Footer */}
      <footer className="bg-black h-28 text-white p-4">{footer}</footer>
    </div>
  );
}
