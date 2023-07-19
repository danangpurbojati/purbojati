import './globals.css';
import Navbar from '@/core/components/Navbar';
import { Sora } from 'next/font/google';
import Header from '@/core/components/Header';
import { Metadata } from 'next';

const sora = Sora({ 
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'] 
});

export const metadata: Metadata = {
    title: "Danang's portfolio",
    description: 'Frontend web developer. Experienced developing e-commerce website using React Js, Next Js and Graphql Client',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${sora.className} page text-blueDark relative`}>
                <Header />
                <Navbar />
                {children}
            </body>
        </html>
    );
};
