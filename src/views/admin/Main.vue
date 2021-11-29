<script>
import CountsCard from '@/components/admin/CountsCard.vue'
export default {
    name: 'AdminMain',
    components: {
        CountsCard
    }
    
}
</script>

<template>
    <div>
        <p>Hello {{fullname}}</p>
        <div class="md:grid gap-10 md:grid-cols-3">
			<CountsCard :total="3" :name = "'Cards'"/>
			<CountsCard :total="3" :name = "'Cardlets'"/>
			<CountsCard :total="3" :name = "'Btc Trades'"/>
		</div>
        	<div class="-mx-4  px-4 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow-md  rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-cyan text-left  font-semibold text-white uppercase tracking-wider">
									User
								</th>
								
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-cyan text-left  font-semibold text-white uppercase tracking-wider">
									phone
								</th>
								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white ">
									<div class="flex">
										<div class="flex-shrink-0 w-10 h-10">
											<img
											  class="w-full h-full rounded-full"
											  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
											  alt=""
											>
										</div>
										<div class="ml-3">
											<p class="text-gray-900 capitalize whitespace-no-wrap">
												'user.fullname'
											</p>
											<p class="text-gray-600 whitespace-no-wrap">
												'user.email'
											</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white ">
									<p class="text-gray-900 whitespace-no-wrap">
										'user.phone'
									</p>
									
								</td>
								
							</tr>
							
							
						</tbody>
					</table>
				</div>
			</div>
    </div>
</template>
