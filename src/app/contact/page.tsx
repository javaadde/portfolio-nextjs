'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [openNav, setOpenNav] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newRotation = (scrollY / 1000) * 360;
            setRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('q5UHoBcW_BDmMxKk_');
    }, []);

    const nameInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleLetsTalkClick = () => {
        nameInputRef.current?.focus();
        nameInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        if (!formRef.current) {
            console.error('Form reference is null');
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Sending email...');
            const result = await emailjs.sendForm(
                'service_xi7wpgo',
                'template_527lif6',
                formRef.current,
                'q5UHoBcW_BDmMxKk_'
            );

            console.log('SUCCESS!', result.status, result.text);
            setSubmitStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error: any) {
            console.error('FAILED!', error);
            console.error('Error text:', error?.text);
            setSubmitStatus('error');

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FBF4E6] text-black">
            {/* Mobile Navigation */}
            <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <span onClick={() => setOpenNav(false)} className="text-2xl block text-center py-4 font-grotesk cursor-pointer">Close</span>
                <h1 className="mt-10 text-center text-6xl font-silkscreen">JAVAD</h1>
                <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/about">About</Link></li>
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/projects">Projects</Link></li>
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/contact">Contact</Link></li>
                </ul>
                <div className="w-full pb-5 absolute bottom-0 flex justify-center">
                    <div onClick={handleLetsTalkClick} className="h-18 w-18 cursor-pointer font-jetbrains rounded-full bg-[#FBF4E6] text-center">
                        <p className="p-4 text-[#404CD6]">LETS,<br />TALK</p>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="text-center p-4">
                <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/about">About</Link></li>
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/projects">Projects</Link></li>
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/contact">Contact</Link></li>
                </ul>
                <span onClick={() => setOpenNav(true)} className="text-2xl md:hidden font-semibold font-grotesk cursor-pointer">Menue</span>
            </nav>

            {/* Floating Button */}
            <div
                onClick={handleLetsTalkClick}
                className="md:w-20 md:h-20 h-15 w-15 cursor-pointer text-[#FBF4E6] font-jetbrains fixed bottom-5 right-5 rounded-full bg-[#404cd6] text-center transition-transform duration-100 z-40"
                style={isMounted ? { transform: `rotate(${rotation}deg)` } : undefined}
                suppressHydrationWarning
            >
                <p className="p-2.5 text-sm md:p-5 md:text-md">LETS,<br />TALK</p>
            </div>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-12 py-20">
                <h1 className="text-5xl md:text-8xl font-bold font-grotesk mb-8 text-center">Get in Touch</h1>
                <p className="text-lg md:text-xl font-jetbrains max-w-2xl text-center mb-12">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label htmlFor="name" className="block font-jetbrains text-lg mb-2">Name</label>
                            <input
                                ref={nameInputRef}
                                type="text"
                                id="name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-2 font-jetbrains text-lg transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="block font-jetbrains text-lg mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-2 font-jetbrains text-lg transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-jetbrains text-lg mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-2 font-jetbrains text-lg transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-jetbrains">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg font-jetbrains">
                            ✗ Failed to send message. Please try again or email me directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`mt-8 self-center md:self-start px-8 py-3 bg-black text-[#FBF4E6] font-grotesk text-xl rounded-full transition-all duration-300 ${isSubmitting
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-[#404CD6] hover:scale-105'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                <div className="mt-20 flex flex-col items-center gap-4">
                    <p className="font-jetbrains text-lg">Or email me directly at</p>
                    <a href="mailto:jawaadde@gmail.com" className="font-grotesk text-2xl md:text-4xl hover:text-[#404CD6] transition-colors">
                        jawaadde@gmail.com
                    </a>
                </div>
            </main>
        </div>
    );
}