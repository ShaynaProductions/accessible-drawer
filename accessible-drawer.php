<?php
/**
 * Plugin Name:       Accessible Drawer
 * Description:       An Accessible Sliding Drawer block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Shayna Productions
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accessible-drawer
 *
 * @package           shayna-prod
 */


function accessible_drawer_accessible_drawer_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'accessible_drawer_accessible_drawer_block_init' );

function add_jquery() {
	wp_enqueue_script( 'jquery' );
}

add_action( 'init', 'add_jquery' );
