import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() gridArea: string = '';
  @Input() icon: string | null = null;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
