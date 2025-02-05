/* 
  File: services.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/



export default function Projects() {
    return (
        <>
            <div class="services-page">

                <div class="services-container">
                    {/* list of services */}
                    <div class="service-card">
                        <img src="/img/generalprogramming.jpg" alt="General Programming" class="service-icon"></img>
                        <h2>General Programming</h2>
                        <p>Offer custom software solutions tailored to your business needs.</p>
                    </div>

                    <div class="service-card">
                        <img src="/img/unity.jpg" alt="Unity Game Development" class="service-icon"></img>
                        <h2>Game Development</h2>
                        <p>Develop mordern Games based on Unity platform.</p>
                    </div>

                    <div class="service-card">
                        <img src="/img/photoshop.png" alt="Photoshop" class="service-icon"></img>
                        <h2>Image Editing</h2>
                        <p>Create powerful and intuitive image editing skills to handle all your images.</p>
                    </div>
                </div>
            </div>
        </>
    );
}