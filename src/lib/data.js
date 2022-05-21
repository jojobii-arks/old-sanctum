/* eslint-disable no-unused-vars */
import icon from './icons-catalog.json';

class EffectType {
	/**
	 *
	 * @param {string} name - Name of effect type.
	 * @param {string} unitOfValue - Unit of value.
	 * @param {string} category - 'potency', 'ailment-resist', 'stat', 'element-potency', etc.
	 * @param {string} icon - SVG Path of Icon
	 */
	constructor(name, unitOfValue, category, icon) {
		if (unitOfValue !== '%' && unitOfValue !== '+' && unitOfValue !== '~') {
			console.error(new Error('Please provide a proper unit of value.'));
			return;
		}
		this.name = name;
		this.unitOfValue = unitOfValue;
		this.category = category;
		this.icon = icon;
	}
}

class Effect {
	/**
	 *
	 * @param {EffectType} effectType - Type of effect, from ngs_fx array.
	 * @param {number} value - Value of effect. If %, provide as decimal (2.5% is 2.5, not 0.025).
	 */
	constructor(effectType, value) {
		this.effectType = effectType;
		this.value = value;
	}

	get formattedValue() {
		let sign;
		switch (this.effectType.unitOfValue) {
			case '%':
				return `${this.value.toFixed(2)}%`;
			case '+':
				switch (Math.sign(this.value)) {
					case 1:
						sign = '+';
						break;
					case -1:
						sign = '-';
						break;
					case 0:
						sign = '';
				}
				return `${sign}${this.value}`;
			default:
				return this.value;
		}
	}
}

class Augment {
	/**
	 *
	 * @param {string} name - Display name of Augment.
	 * @param {string} slot - Slot occupied by Augment
	 * @param {Effect[]} effects - Array of Effects with values.
	 * @param {number} battlePower - Battle Power of Augment
	 * @param {Object} details - Extra details of Augment.
	 * @param {number} details.level - Level of Augment
	 * @param {string} details.variant - Variant of Augment
	 * @param {string} details.region - Region of Augment
	 */
	constructor(name, slot, effects, battlePower, { level, variant, region }) {
		if (!name || !slot || !effects || !battlePower.toString()) {
			console.log(arguments);
			console.error(new Error('Please provide proper Augment data.'));
		}
		this.name = name;
		this.slot = slot;
		this.effects = effects;
		this.battlePower = battlePower;
		this.level = level ? level : null;
		this.variant = variant ? variant : null;
		this.region = region ? region : null;
	}
}

// prettier-ignore
const ngs_fx = {
	pot_melee: new EffectType('Melee Potency %', '%', 'potency', icon.pot_melee),
	pot_ranged: new EffectType('Melee Potency %', '%', 'potency', icon.pot_ranged),
	pot_technique: new EffectType('Melee Potency %', '%', 'potency', icon.pot_technique),
	ailment_res_all: new EffectType('All Resist %', '%', 'ailment', icon.ailment_all),
	ailment_res_blind: new EffectType('Blind Resist %', '%', 'ailment', icon.ailment_blind),
	ailment_res_burn: new EffectType('Burn Resist %', '%', 'ailment', icon.ailment_burn),
	ailment_res_freeze: new EffectType('Freeze Resist %', '%', 'ailment', icon.ailment_freeze),
	ailment_res_pain: new EffectType('Pain Resist %', '%', 'ailment', icon.ailment_pain),
	ailment_res_panic: new EffectType('Panic Resist %', '%', 'ailment', icon.ailment_panic),
	ailment_res_poison: new EffectType('Poison Resist %', '%', 'ailment', icon.ailment_poison),
  ailment_res_shock: new EffectType('Shock Resist %', '%', 'ailment', icon.ailment_shock),
  element_pot_dark: new EffectType('Dark Weak Potency Bonus %', '%', 'element-potency', icon.element_dark),
  element_pot_fire: new EffectType('Fire Weak Potency Bonus %', '%', 'element-potency', icon.element_fire),
  element_pot_ice: new EffectType('Ice Weak Potency Bonus %', '%', 'element-potency', icon.element_ice),
  element_pot_light: new EffectType('Light Weak Potency Bonus %', '%', 'element-potency', icon.element_light),
  element_pot_lightning: new EffectType('Lightning Weak Potency Bonus %', '%', 'element-potency', icon.element_lightning),
  element_pot_wind: new EffectType('Wind Weak Potency Bonus %', '%', 'element-potency', icon.element_wind),
  stat_damage_res: new EffectType('Damage Resist %', '%', 'stat', icon.stat_defense),
  stat_potency_floor: new EffectType('Potency Floor %', '%', 'stat', icon.stat_dexterity),
  stat_hp: new EffectType('HP', '+', 'stat', icon.stat_hp),
  stat_pp: new EffectType('PP', '+', 'stat', icon.stat_pp),
  misc_exp_grind: new EffectType('PP', '~', 'misc', icon.misc_exp)
};

// ! Build Augment Data Structure with JSON file.

import ngsdata from './ngs-csv-20220520.json';

function buildAugmentDB() {
	return ngsdata.map((e) => {
		const { name, slot, battlePower, level, variant, region, ...dataEffects } =
			e;
		const augmentEffects = [];
		for (let effect in dataEffects) {
			if (dataEffects[effect]) {
				let value = dataEffects[effect];
				if (typeof value === 'string') {
					value = value.replace('%', '');
				}
				augmentEffects.push(new Effect(ngs_fx[effect], Number(value)));
			}
		}
		return new Augment(name, slot, augmentEffects, battlePower, {
			level,
			variant,
			region
		});
	});
}

const data = buildAugmentDB();

console.log(data);

export default data;
