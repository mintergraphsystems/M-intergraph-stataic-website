import React, { useState, useEffect } from 'react';
import { XMarkIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('General Inquiry');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);

        if (!isOpen) {
            setStatus('idle');
            setName('');
            setEmail('');
            setPhone('');
            setServiceType('General Inquiry');
            setMessage('');
        }

        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('serviceType', serviceType);
        formData.append('message', message);

        try {
            const response = await fetch('https://formspree.io/f/xzzvyqya', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm animate-fade-in"
            style={{ animationDuration: '0.3s' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-out p-4 sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close contact form"
                >
                    <XMarkIcon className="h-7 w-7" />
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8 animate-fade-in">
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3">Thank You!</h2>
                        <p className="text-base sm:text-lg text-slate-600">
                            Your message has been sent successfully. We'll get back to you shortly.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact Us</h2>
                            <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-slate-500">
                                Your email address will not be published. Required fields are marked *
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name *"
                                    className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address *"
                                    className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number *"
                                    className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                                <select
                                    id="service-type"
                                    name="serviceType"
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg text-base text-slate-600 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                >
                                    <option>General Inquiry</option>
                                    <option>IT Consulting & Advisory</option>
                                    <option>IT System Integration</option>
                                    <option>Managed IT Services</option>
                                    <option>Private Branded Field Services</option>
                                    <option>NOC Services</option>
                                    <option>Careers</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                            <textarea
                                id="message"
                                rows={4}
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter Your Message here *"
                                className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                required
                            ></textarea>

                            {status === 'error' && (
                                <p className="text-base text-red-600 text-center">
                                    Something went wrong. Please try again later.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center rounded-lg px-4 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 disabled:bg-slate-500 disabled:shadow-lg disabled:scale-100 disabled:cursor-not-allowed"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-200 text-center text-sm text-slate-500">
                            <p>Or contact us directly:</p>
                            <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-3 sm:space-x-6">
                                <a
                                    href="mailto:contact@mintergraph.com"
                                    className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                                >
                                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                                    <span>contact@mintergraph.com</span>
                                </a>
                                <a
                                    href="tel:+919599701606"
                                    className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    <span>+91 9599701606</span>
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
