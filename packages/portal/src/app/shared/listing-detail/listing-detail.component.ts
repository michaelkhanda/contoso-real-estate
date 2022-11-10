import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-listing-detail",
  templateUrl: "./listing-detail.component.html",
  styleUrls: ["./listing-detail.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class ListingDetailComponent implements OnInit {
  @Input() listing!: Listing;

  constructor() {}

  ngOnInit(): void {}
}