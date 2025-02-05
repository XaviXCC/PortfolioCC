/* 
  File: Layout.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/


import React from 'react';
import { Link } from 'react-router-dom';
export default function LayoutFooter() {
    return (
        <footer class="footer">
            <div class="footer-content">

                {/* four sections: copyright, disclaimer, about us, terms of use in the footer */}
                <div class="footer-section">
                    <h3>Copyright</h3>
                    <p>&copy; 2025 My Company. All rights reserved.</p>
                </div>

                <div class="footer-section">
                    <h3>Disclaimer</h3>
                    <p>
                        The information provided on this website is for general informational purposes only. No representations or warranties of any kind about the accuracy, reliability, or availability of the information.
                    </p>
                </div>

                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>
                        This website is owned and operated by Myself. For any inquiries, please contact me <a href="mailto:info@mycompany.com">info@mycompany.com</a>.
                    </p>
                </div>

                <div class="footer-section">
                    <h3>Terms of Use</h3>
                    <p>
                        By using this website, you agree to comply with <a href="/contact">Terms of Use</a> and <a href="/contact">Privacy Policy</a>.
                    </p>
                </div>
            </div>


            <div class="footer-bottom">
                <p>
                    <a href="/contact">Terms of Use</a> |
                    <a href="/contact">Privacy Policy</a> |
                    <a href="/contact">Contact Us</a>
                </p>
            </div>
        </footer>

    );
}