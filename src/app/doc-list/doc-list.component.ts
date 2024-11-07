import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doc-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent {
  searchTerm: string = '';
  searchFilter: string = 'name'; // default filter option
  dropdownOpen: boolean = false; // added property to track dropdown state
  selectedFilter = 'Search by Name'; // Set default filter to "Search by Name"
  placeholderText = 'Search Doctor';

  doctors = [
    { name: "Dr. John Doe", specialization: "Cardiologist", location: "New York", rating: 4.5, image: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--medical-healthcare-health-avatar-pack-people-illustrations-4715129.png?f=webp" },
    { name: "Dr. Jane Smith", specialization: "Dermatologist", location: "Los Angeles", rating: 4.7, image: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--medical-healthcare-health-avatar-pack-people-illustrations-4715129.png?f=webp" },
    { name: "Dr. Emily Johnson", specialization: "Neurologist", location: "Chicago", rating: 4.8, image: "https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-61953.jpg" },
    { name: "Dr. Mike Brown", specialization: "Pediatrician", location: "Houston", rating: 4.6, image: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--medical-healthcare-health-avatar-pack-people-illustrations-4715129.png?f=webp" },
    { name: "Dr. Sarah Wilson", specialization: "Orthopedic", location: "Phoenix", rating: 4.4, image: "https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-61953.jpg" },
    { name: "Dr. Tom Hanks", specialization: "General Practitioner", location: "San Francisco", rating: 4.2, image: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--medical-healthcare-health-avatar-pack-people-illustrations-4715129.png?f=webp" },
    { name: "Dr. Lisa Taylor", specialization: "Oncologist", location: "Seattle", rating: 4.9, image: "https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-61953.jpg" },
    { name: "Dr. Samuel Green", specialization: "Psychiatrist", location: "Boston", rating: 4.3, image: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--medical-healthcare-health-avatar-pack-people-illustrations-4715129.png?f=webp" },
    { name: "Dr. Rachel Adams", specialization: "Endocrinologist", location: "Miami", rating: 4.6, image: "https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-61953.jpg" }
];

  filteredDoctors = this.doctors;

  ngOnInit(): void {
    this.filteredDoctors = this.doctors; // Display all doctors initially
  }

  // Function to toggle dropdown visibility
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Function to set filter option
  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.placeholderText = `Search Doctor by ${filter.replace('Search by ', '')}`;
    this.dropdownOpen = false;
    this.onSearch(); // Call onSearch to filter the results based on the selected filter
  }

  // Function to search doctors based on the selected filter
  onSearch() {
    const term = this.searchTerm.toLowerCase();
    if (this.selectedFilter === 'Search by Name') {
      this.filteredDoctors = this.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(term)
      );
    } else if (this.selectedFilter === 'Search by Location') {
      this.filteredDoctors = this.doctors.filter((doctor) =>
        doctor.location.toLowerCase().includes(term)
      );
    } else if (this.selectedFilter === 'Search by Specialization') {
      this.filteredDoctors = this.doctors.filter((doctor) =>
        doctor.specialization.toLowerCase().includes(term)
      );
    }
  }

  checkAvailability(doctorName: string): void {
    alert(`Availability for ${doctorName} is being checked...`);
  }
  getStarsArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    // Create an array with 'true' for full stars and 'false' for empty stars
    return [
        ...Array(fullStars).fill(true),
        ...Array(emptyStars + halfStar).fill(false)
    ];
}
@HostListener('document:click', ['$event'])
onClick(event: MouseEvent) {
  const dropdown = document.querySelector('.dropdown');
  const targetElement = event.target as HTMLElement;
  
  // Close dropdown if clicked outside of the dropdown
  if (dropdown && !dropdown.contains(targetElement)) {
    this.dropdownOpen = false;
  }
}

}
