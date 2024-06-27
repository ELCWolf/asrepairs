document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.body.style.zoom = "90%"
    const formData = new FormData(this);
    const action = this.action;

    fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for contacting us!');
            this.reset();
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    }).catch(error => {
        alert('There was an error. Please try again.');
    });
    <section id="timeline">
        <h2>My Certifications Timeline</h2>
        <ul class="timeline-container">
            <li class="timeline-item">
                <div class="timeline-item-content">
                    <h3>A+ Hardware Technician Certification</h3>
                    <p>Received from CompTIA, May 2024</p>
                </div>
            </li>
        </ul>
    </section>
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
        });
    });

});
