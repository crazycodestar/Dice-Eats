import React, { Component } from "react";
import ShoppingItem from "../components/ShoppingItem";

import itemsAsset from "../components/assets";
import SectionSlider from "../components/SectionSlider";
import "../components/styles/ProductDetailScreen.css";
import Comment from "../components/Comment";

import lemon from "../assets/lemon.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import Section from "../components/Section";
import ProductScroller from "../components/ProductScroller";
import Info from "../components/info";

class ProductDetailScreen extends Component {
	state = {
		items: itemsAsset,
		fruits: [],
		vegetables: [],
		comments: [
			{
				src: lemon,
				id: 1,
				username: "CrazyLaky",
				comment: `I reallty like the lemon it is really sweet and has a nice zing to it`,
			},
			{
				src: apple,
				id: 2,
				username: "Ope_the_sweat",
				comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Rerum, perspiciatis quibusdam aliquid error provident`,
			},
			{
				src: banana,
				id: 3,
				username: "eadekanmbi",
				comment: `accusamus nam culpa. Quisquam magnam amet, natus quod eveniet
				consequatur nisi facilis sunt voluptas tenetur debitis`,
			},
		],
	};

	constructor() {
		super();
		let fruits = this.state.items.filter((item) => item.foodClass === "fruits");
		let vegetables = this.state.items.filter(
			(item) => item.foodClass === "vegetables"
		);
		this.state.fruits = fruits;
		this.state.vegetables = vegetables;
	}

	// Card item functions
	handleIncrement = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount++;
		this.setState({ items });
	};

	handleDecrement = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount--;
		this.setState({ items });
	};

	handleReset = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount = 0;
		this.setState({ items });
	};

	render() {
		return (
			<div className="product-details">
				{/* <nav className="navbar navbar-light bg-light p-1 fixed-top">
					<button className="btn btn-secondary">{"<"}</button>
				</nav> */}
				{/* <Navbar /> */}
				<SectionSlider
					brand={<i class="fas fa-chevron-left"></i>}
					links={["Product Info", "Seller's Info", "Customer Feedback"]}
				/>
				<div className="container content">
					<ShoppingItem
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
						item={this.state.items[0]}
					/>
					<Section title="Product Info">
						<div className="row">
							<div className="col-lg-8">
								<h5>Lemonade</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, perspiciatis quibusdam aliquid error provident
									accusamus nam culpa. Quisquam magnam amet, natus quod eveniet
									consequatur nisi facilis sunt voluptas tenetur debitis
									excepturi quaerat. Temporibus atque nulla illum ab quae sit
									laboriosam. Nam accusantium culpa debitis quo eaque in, esse
									consequatur quidem harum rem iste delectus consectetur rerum
									libero voluptas quos assumenda voluptatibus repudiandae. Ea
									dolore placeat doloribus aliquam beatae soluta hic quaerat
									assumenda facere culpa sunt consectetur, laborum tenetur,
									quibusdam ipsa est? Exercitationem dolorum deleniti deserunt,
									magni quidem molestiae tempora accusantium! Necessitatibus
									temporibus, eligendi ab velit in sint. Laboriosam, porro
									corporis.
								</p>
							</div>
							<div className="col-lg-4 product-help">
								<Info heading="Delivery">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Fugit, a?
								</Info>
								<Info heading="Refund">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dolor, repudiandae?
								</Info>
								<Info heading="Warranty">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Doloremque dolorum, tempore maiores porro ratione illo.
								</Info>
							</div>
						</div>
					</Section>
					<Section title="Seller's Info">
						<div className="component">
							<h5>Dice Eats</h5>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Corrupti nemo iusto, beatae unde perferendis modi eveniet quae,
								voluptate mollitia id molestias maiores quaerat ea ullam? Iure
								voluptate minus maxime illo nostrum natus nobis non? Ea, minima
								eaque, illum sapiente, doloremque voluptates sequi rerum porro
								nam aut explicabo reiciendis quia assumenda nobis. Enim placeat
								dolor possimus itaque quod voluptate omnis, quo commodi nam fuga
								qui unde provident dolorem aliquid similique numquam sed hic
								ipsam earum id impedit nostrum esse vitae. Sed quae quos
								voluptas! Sapiente non eum reiciendis iste sed culpa quaerat
								iusto consequuntur, eveniet nisi eaque facilis, ipsum illo
								molestiae! Quisquam excepturi ab repellendus magni quaerat error
								ipsum rem placeat illum? Accusamus ipsam tempore, non enim est
								nostrum. Natus consectetur distinctio minus tempore nobis
								aliquid magnam non necessitatibus possimus dignissimos aut
								incidunt voluptatem, esse a cumque. Reiciendis, ipsam? Quo
								reiciendis dignissimos at sit dolor nostrum cumque doloribus!
								Tempora, aut dolor! Eaque unde, iste eligendi labore optio eius
								nobis natus consequuntur explicabo architecto soluta excepturi
								ut. Adipisci molestias minima veniam reiciendis laudantium
								doloremque libero? Vel dignissimos, debitis accusantium
								quibusdam soluta odit veniam voluptate, atque fugiat eaque
								consequatur magnam expedita veritatis sapiente. Tempora dolorum
								recusandae ipsum odit doloremque obcaecati voluptas ullam
								dignissimos.
							</p>
						</div>
						<Section title="We Also Sell">
							<div className="related">
								<ProductScroller
									onIncrement={this.handleIncrement}
									onDecrement={this.handleDecrement}
									onReset={this.handleReset}
									items={this.state.items.filter(
										(item) => item.foodClass === item.foodClass
									)}
								/>
							</div>
						</Section>
					</Section>

					<Section title="Related">
						<div className="related">
							<ProductScroller
								onIncrement={this.handleIncrement}
								onDecrement={this.handleDecrement}
								onReset={this.handleReset}
								items={this.state.items.filter(
									(item) => item.foodClass === "Fruits"
								)}
							/>
						</div>
					</Section>
					<Section title="Customer Feedback" style={{ marginBottom: 0 }}>
						<ul className="customer-comments">
							{this.state.comments.map((comment) => (
								<Comment
									src={comment.src}
									key={comment.id}
									id={comment.id}
									username={comment.username}
									subTitle={comment.comment}
								/>
							))}
						</ul>
					</Section>
				</div>
			</div>
		);
	}
}

export default ProductDetailScreen;
