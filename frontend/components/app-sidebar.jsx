'use client'

import * as React from 'react'
import { GiAbstract004 } from 'react-icons/gi'
import { MdCalendarMonth, MdInventory, MdLayers, MdOutlineDashboard, MdOutlineSettings, MdToday, MdTrendingUp, MdViewWeek } from 'react-icons/md'
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
} from '@tabler/icons-react'

import { NavDocuments } from '@/components/nav-documents'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'admin',
    email: 'admin@dubsar.com',
    avatar: '#',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: MdOutlineDashboard,
    },
    {
      title: 'Categories',
      url: '/dashboard/categories',
      icon: MdLayers,
    },
    {
      title: 'Products',
      url: '/dashboard/products',
      icon: MdInventory,
    },
    {
      title: 'Sales',
      url: '/dashboard/sales',
      icon: MdTrendingUp,
    }
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: MdOutlineSettings,
    }
  ],
  documents: [
    {
      name: 'Today\'s Sales',
      url: '/dashboard/reports/todayssales',
      icon: MdToday,
    },
    {
      name: 'Weekly Sales',
      url: '/dashboard/reports/weeklysales',
      icon: MdViewWeek,
    },
    {
      name: 'Montly Sales',
      url: '/dashboard/reports/monthlysales',
      icon: MdCalendarMonth,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:p-1.5!'>
              <a href='#'>
                <GiAbstract004 className='size-5! text-primary' />
                <span className='text-base font-semibold pt-1'>Dub Sar Systema</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
