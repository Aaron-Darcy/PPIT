import React, { Component } from 'react'
import '../stylesheets/nutrition.css'

export default class Nutrition extends Component {
  render() {
    return (
      <div>
        <h2 className='center'>Nutrition</h2>
        <p className='Nutrition-text'>
          <img src='/images/fruit.jpg' className='fruit-image'></img>
            As the relatively old saying goes, ‘abs are made in the kitchen, not the gym’. The benefits of nutrition before, during, and after your workout are well accepted but not well understood. 
            Of course, you still need to work out, but nutrition remains a pivotal area for gym-goers. It’s a complex area, with no single solution or approach that works equally well for everyone. But it's often a lack of understanding of the basic tenants of sports nutrition which leads many to overlook this important area. 
            There are many types of nutritional supplements, all with different purposes, taken at different times, and with altering levels of effectiveness.
            
            That makes it a good idea to try a range of food and supplement variations to find out what works for you and provides results.
            It’s a good idea to keep a diary of what you eat, including your nutritional supplements, and track these against your performance gains. That way, you can know for sure if your food regime – for it should be a ‘regime’ – is as effective as your lifting techniques and work out schedule.
            You’ll also find out if what you’re taking and the diet you’re following is simply hype or the real thing – data is key!
        </p>
        <h2>What To Eat Before The Gym</h2>
          <p className='Nutrition-text' >
            Fueling your body with the right nutrients prior to exercise will give you the energy and strength you need to perform better.
            Each macronutrient has a specific role before a workout. However, the ratio in which you need to consume them varies by the individual and type of exercise 
            Many studies have documented the potential of pre-workout protein consumption to improve athletic performance.
            Eating protein (alone or with carbs) prior to exercise has been shown to increase muscle protein synthesis.
            One study showed a positive anabolic response after participants consumed 20 grams of whey protein before exercise.
            Ideally, fuel up two hours before you exercise by:
          <ul>
            <li>Hydrating with water.</li>
            <li>Eating healthy carbohydrates such as whole-grain cereals (with low-fat or skim milk), whole-wheat toast, low-fat or fat-free yogurt, whole grain pasta, brown rice, fruits and vegetables.</li>
            <li>Avoiding saturated fats and even a lot of healthy protein — because these types of fuels digest slower in your stomach and take away oxygen and energy-delivering blood from your muscles. 
                If you only have 5-10 minutes before you exercise, eat a piece of fruit such as an apple or banana.</li>
          </ul>
        </p>
        <h2>Tips For Weight Loss </h2>
          <p className='Nutrition-text'>
            <ul>
              <li><b>Eat High Protein Foods/Set yourself a protein goal</b></li>
              <p>Set yourself a protein goal based on your calories everyday and try your hardest to reach it.Usually anywhere from 20-35 percent of your calories should come from protein</p>
              <li><b>Eat foods Low In Fat</b></li>
              <p>Fat has more than twice as many calories per gram as carbohydrates and proteins. A gram of fat has about 9 calories, while a gram of carbohydrate or protein has about 4 calories. In other words, you could eat twice as much carbohydrates or proteins as fat for the same amount of calories.</p>
              <li><b>Drink plenty of water</b></li>
              <p>People sometimes confuse thirst with hunger. You can end up consuming extra calories when a glass of water is really what you need. Read more about drinking water as part of a heathly diet</p>
              <li><b>Cut Down On Alcohol</b></li>
              <p>A standard glass of wine can contain as many calories as a piece of chocolate. Over time, drinking too much can easily contribute to weight gain.</p>
            </ul>
          </p>

      </div>
    )
  }
}
