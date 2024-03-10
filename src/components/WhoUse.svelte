<script>
	import * as m from "$paraglide/messages"

	import barao_de_maua from '$lib/img/users/barao_de_maua.svg';
	import faculdade_unica from '$lib/img/users/faculdade_unica.svg';
	import feevale from '$lib/img/users/feevale.svg';
	import iesb from '$lib/img/users/iesb.svg';
	import ifac from '$lib/img/users/ifac.svg';
	import ifba from '$lib/img/users/ifba.svg';
	import iff from '$lib/img/users/iff.svg';
	import ifg from '$lib/img/users/ifg.svg';
	import ifmg from '$lib/img/users/ifmg.svg';
	import ifms from '$lib/img/users/ifms.svg';
	import ifpb from '$lib/img/users/ifpb.svg';
	import ifpr from '$lib/img/users/ifpr.svg';
	import ifro from '$lib/img/users/ifro.svg';
	import ifrs from '$lib/img/users/ifrs.svg';
	import ifsc from '$lib/img/users/ifsc.svg';
	import ifsp from '$lib/img/users/ifsp.svg';
	import ufba from '$lib/img/users/ufba.svg';
	import ufc from '$lib/img/users/ufc.svg';
	import ufms from '$lib/img/users/ufms.svg';
	import ufpel from '$lib/img/users/ufpel.svg';
	import ufs from '$lib/img/users/ufs.svg';
	import ufsc from '$lib/img/users/ufsc.svg';
	import unemat from '$lib/img/users/unemat.svg';
	import uni_cruzeiro_do_sul from '$lib/img/users/uni_cruzeiro_do_sul.svg';
	import unibrasil from '$lib/img/users/unibrasil.svg';
	import unicesumar from '$lib/img/users/unicesumar.svg';
	import unisal from '$lib/img/users/unisal.svg';
	import unisinos from '$lib/img/users/unisinos.svg';
	import univille from '$lib/img/users/univille.svg';
	import uvv from '$lib/img/users/uvv.svg';

	let users = [
		{ name: "m.User_ufba()", src: ufba },
		{ name: "m.User_ufc()", src: ufc },
		{ name: "m.User_ufms()", src: ufms },
		{ name: "m.User_ufpel()", src: ufpel },
		{ name: "m.User_ufsc()", src: ufsc },
		{ name: "m.User_ufs()", src: ufs },
		{ name: "m.User_barao_de_maua()", src: barao_de_maua },
		{ name: "m.User_faculdade_unica()", src: faculdade_unica },
		{ name: "m.User_feevale()", src: feevale },
		{ name: "m.User_iesb()", src: iesb },
		{ name: "m.User_unemat()", src: unemat },
		{ name: "m.User_uni_cruzeiro_do_sul()", src: uni_cruzeiro_do_sul },
		{ name: "m.User_unibrasil()", src: unibrasil },
		{ name: "m.User_unicesumar()", src: unicesumar },
		{ name: "m.User_unisal()", src: unisal },
		{ name: "m.User_unisinos()", src: unisinos },
		{ name: "m.User_univille()", src: univille },
		{ name: "m.User_uvv()", src: uvv },
		{ name: "m.User_ifac()", src: ifac },
		{ name: "m.User_ifba()", src: ifba },
		{ name: "m.User_iff()", src: iff },
		{ name: "m.User_ifg()", src: ifg },
		{ name: "m.User_ifmg()", src: ifmg },
		{ name: "m.User_ifms()", src: ifms },
		{ name: "m.User_ifpb()", src: ifpb },
		{ name: "m.User_ifpr()", src: ifpr },
		{ name: "m.User_ifro()", src: ifro },
		{ name: "m.User_ifrs()", src: ifrs },
		{ name: "m.User_ifsc()", src: ifsc },
		{ name: "m.User_ifsp()", src: ifsp },
	];
</script>

<section id="test" data-aos="fade-up">
	<div class="bg-white border-b-2">
		<div class="mx-auto max-w-7xl px-6 py-24">
			<h2 class="mb-24 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{m.Who_use_title()}</h2>
			<div class="
				grid
				grid-cols-6
				mx-auto
				max-w-6xl
				items-center
				gap-x-8
				gap-y-12
				lg:grid-cols-5"
			>
				{#each users as user}
					<img
						class="col-span-2 w-full object-contain lg:col-span-1"
						src={user.src}
						alt={user.name}
						title={user.name}
					/>
				{/each}
		</div>
	</div>
</section>

<section id="WhoUse" >
	<div class="bg-white border-b-2">
		<div class="mx-auto max-w-7xl px-6 py-24">
			<h2 class="mb-24 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{m.Who_use_title()}</h2>
			<div class="
				grid
				grid-cols-6
				mx-auto
				max-w-6xl
				items-center
				gap-x-8
				gap-y-12
				lg:grid-cols-5"
			>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufba}
					alt="{m.User_ufba()}"
					title="{m.User_ufba()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufc}
					alt="{m.User_ufc()}"
					title="{m.User_ufc()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufms}
					alt="{m.User_ufms()}"
					title="{m.User_ufms()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufpel}
					alt="{m.User_ufpel()}"
					title="{m.User_ufpel()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufsc}
					alt="{m.User_ufsc()}"
					title="{m.User_ufsc()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ufs}
					alt="{m.User_ufs()}"
					title="{m.User_ufs()}"
				/>
					<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={barao_de_maua}
					alt="{m.User_bara_de_maua()}"
					title="{m.User_bara_de_maua()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={faculdade_unica}
					alt="{m.User_faculdade_unica()}"
					title="{m.User_faculdade_unica()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={feevale}
					alt="{m.User_feevale()}"
					title="{m.User_feevale()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={iesb}
					alt="{m.User_iesb()}"
					title="{m.User_iesb()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={unemat}
					alt="{m.User_unemat()}"
					title="{m.User_unemat()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={uni_cruzeiro_do_sul}
					alt="{m.User_uni_cruzeiro_do_sul()}"
					title="{m.User_uni_cruzeiro_do_sul()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={unibrasil}
					alt="{m.User_unibrasil()}"
					title="{m.User_unibrasil()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={unicesumar}
					alt="{m.User_unicesumar()}"
					title="{m.User_unicesumar()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={unisal}
					alt="{m.User_unisal()}"
					title="{m.User_unisal()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={unisinos}
					alt="{m.User_unisinos()}"
					title="{m.User_unisinos()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={univille}
					alt="{m.User_univille()}"
					title="{m.User_univille()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={uvv}
					alt="{m.User_uvv()}"
					title="{m.User_uvv()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifac}
					alt="{m.User_ifac()}"
					title="{m.User_ifac()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifba}
					alt="{m.User_ifba()}"
					title="{m.User_ifba()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={iff}
					alt="{m.User_iff()}"
					title="{m.User_iff()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifg}
					alt="{m.User_ifg()}"
					title="{m.User_ifg()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifmg}
					alt="{m.User_ifmg()}"
					title="{m.User_ifmg()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifms}
					alt="{m.User_ifms()}"
					title="{m.User_ifms()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifpb}
					alt="{m.User_ifpb()}"
					title="{m.User_ifpb()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifpr}
					alt="{m.User_ifpr()}"
					title="{m.User_ifpr()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifro}
					alt="{m.User_ifro()}"
					title="{m.User_ifro()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifrs}
					alt="{m.User_ifrs()}"
					title="{m.User_ifrs()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifsc}
					alt="{m.User_ifsc()}"
					title="{m.User_ifsc()}"
				/>
				<img
					class="col-span-2 w-full object-contain lg:col-span-1"
					src={ifsp}
					alt="{m.User_ifsp()}"
					title="{m.User_ifsp()}"
				/>
			</div>
		</div>
	</div>
</section>